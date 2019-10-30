import re
import csv
import hashlib 
import requests
import pandas as pd
from bs4 import BeautifulSoup

events_ids, events_links, events_pictures, events_titles, events_dates, events_addresses, events_organizers, events_descriptions = [], [], [], [], [], [], [], []

main_req = requests.get("https://www.eventbrite.ca/d/canada--ontario/charity-and-causes--events/").content

pgs = int(re.findall('\d+', BeautifulSoup(main_req).find('div', attrs={'data-spec': 'paginator__last-page-link'}).text)[0])

for pg in range(pgs):
    
    pg=pg+1
    
    main_req = requests.get("https://www.eventbrite.ca/d/canada--ontario/charity-and-causes--events/?page="+str(pg)).content

    main_soup = BeautifulSoup(main_req).find_all("div", "search-event-card-wrapper")
    
    try:
        
        for e in main_soup:
            
            link = e.find('a', href=True, attrs={'class': 'eds-media-card-content__action-link'})['href']
            
            sub_req = requests.get(link).content
            
            events_links.append(link)
            events_ids.append(hashlib.md5(link.encode(encoding="utf-8")).hexdigest()) 
        
            event_picture = BeautifulSoup(sub_req).findAll('picture')[0]['content']
            events_pictures.append(event_picture)
            
            event_title = BeautifulSoup(sub_req).find('h1', attrs={'class': 'listing-hero-title'}).text
            events_titles.append(event_title)
            
            event_organizer = BeautifulSoup(sub_req).find('a', attrs={'class': 'js-d-scroll-to listing-organizer-name text-default'}).text
            events_organizers.append(event_organizer.strip())
            
            event_date = BeautifulSoup(sub_req).findAll('div', attrs={'class': 'event-details__data'})[0].text
            events_dates.append(event_date.replace("Add to Calendar", "").strip())
            
            event_address = BeautifulSoup(sub_req).findAll('div', attrs={'class': 'event-details__data'})[1].text
            events_addresses.append(event_address.replace("View Map", "").strip())
            
            event_description = BeautifulSoup(sub_req).find('div', attrs={'data-automation': 'listing-event-description'}).text
            events_descriptions.append(event_description.strip())
    except: pass
        
    print("Done Scraping for Page " + str(pg))
    
with open("events.csv", "a+", newline="", encoding="utf-8") as fp:
    wr = csv.writer(fp)
    wr.writerow(["Event ID", "Event Link", "Event Picture", "Event Title", "Event Organizer", "Event Date", "Event Address", "Event Description"])
    for i in range(len(events_dates)):
        wr.writerow([events_ids[i], events_links[i], events_pictures[i], events_titles[i], events_organizers[i], events_dates[i], events_addresses[i], events_descriptions[i]])
        
df = pd.DataFrame([[events_ids[i], events_links[i], events_pictures[i], events_titles[i], events_organizers[i], events_dates[i], events_addresses[i], events_descriptions[i]] for i in range(len(events_dates))], 
                  columns=["Event ID", "Event Link", "Event Picture", "Event Title", "Event Organizer", "Event Date", "Event Address", "Event Description"])
df_json = df.to_json(orient='records')
with open('events.json', 'w') as outfile:
    outfile.write(df_json)
