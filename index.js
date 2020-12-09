
// localStorage.setItem('openCards')
// const albumData = require('./albums.json');

const data = {
  "albumList" : [
    {
      "key": "1", // Duck Sauce
      "link": "https://open.spotify.com/track/6MbFmc3lDtnlihb7DEabRA?si=zl0mh0l1QZGccD1tA_vyhw"
    },
    {
      "key": "2", // King Gizz
      "link": "https://open.spotify.com/track/28c8ZDVltaCcs4OfIAuI8Z?si=uKZZFKsvRSafccFIAJqKBw"
    },
    {
      "key": "3", // Death Cab
      "link": "https://open.spotify.com/track/1aVDEX174Us2c2NtdOD2jO?si=dAfOfxzwQ8uTwZAOWJiqdg"
    },
    {
      "key": "4", // Postal Service
      "link": "https://open.spotify.com/track/0bWtmYrWat7IWlpx3rmuwc?si=ahmcxW0MSZqiYfM994Xwmw"
    },
    {
      "key": "5", // Shout out Lounds
      "link": "https://open.spotify.com/track/6DyOKserDD6PXiRgUW7YfT?si=dpNMpTgqSpaf2WsGFtEKfg"
    },
    {
      "key": "6", // Alec Khaoli
      "link": "https://open.spotify.com/track/0e7XJaJn5w4k4ORy77yG2W?si=S0X8q_koSGG4qnahxvRLWg"
    },
    {
      "key": "7", // Thin Lizzy
      "link": "https://open.spotify.com/track/4ErL7sAmYhMYIUKFA3XWrS?si=S5n0fMbwS7abkmh-uYVvXg"
    },
    {
      "key": "8", // Västerbron - Påminn mig
      "link": "https://open.spotify.com/track/2kw6qq3adVzmwUjX5iuVqt?si=Ntl7OgarQ7Kznlr3I6N0bg"
    },
    {
      "key": "9", // Funky town
      "link": "https://open.spotify.com/track/0B5kY9i9bmP7554oU4jRoO?si=7_8wkJ_BQKKkb0c4DW1I5Q"
    },
    {
      "key": "10", // Wintergatan
      "link": "https://open.spotify.com/track/2f4P85DGT4Zz7cL8CXB5Bo?si=8fzQby1HSr6nG0FTDa3_2Q"
    },
    {
      "key": "11", // Parquet Courts
      "link": "https://open.spotify.com/track/3GAKdDYtNBhC6jFx9hzQfA?si=W9UgrvPSTc6D0glCS_QKeA"
    },
    {
      "key": "12", // UMO Hunny Bee
      "link": "https://open.spotify.com/track/3DPFmwFtV5ElQaTniLOdgk?si=Sv1tq8ZqRgmcTDp5sfR0fQ"
    },
    {
      "key": "13", // Tegan&Sara
      "link": "https://open.spotify.com/track/2Pdo1VvYDB9FqeuNx8D1FW?si=XrH8WoczTTmTbmYFx7XLng"
    },
    {
      "key": "14", // Little Comets
      "link": "https://open.spotify.com/track/6xZNyKGazh6xbAjSbplVlu?si=B5eTVsCHThWRL9NIa_iY4g"
    },
    {
      "key": "15", // Los Campesinos
      "link": "https://open.spotify.com/track/2UL79XiBl7AWj8KPdhh7ON?si=0A3uaj57SCe1vkTBTA-GrQ"
    },
    {
      "key": "16", // Hoppipolla
      "link": "https://open.spotify.com/track/6eTGxxQxiTFE6LfZHC33Wm?si=QRxEuN1jRjuGigHKZBkGgQ"
    },
    {
      "key": "17", // Katzenjammer
      "link": "https://open.spotify.com/track/5g5eWXp8XRKNHKtMz5p5EV?si=1vlCKimwS926UBnjh1WuUg"
    },
    {
      "key": "18", // Madness
      "link": "https://open.spotify.com/track/2ohy1uevBkPZc4ibN8wMHU?si=gnNqOEZqTIesGge9C95QQw"
    },
    {
      "key": "19", // Digitalism
      "link": "https://open.spotify.com/track/0qDBPHQA0z1quCSeqQrbzn?si=SHSui90KTceHqF9cOIxtKg"
    },
    {
      "key": "20", // bob hund
      "link": "https://open.spotify.com/track/1voD085PDdiIVMqeDVanjO?si=sPMX0PXeQY6vAlBMTUpsxA"
    },
    {
      "key": "21", // Wombats
      "link": "https://open.spotify.com/track/4yifcWyiH6bbJbhKAgRZLb?si=q3O2NwsHQFyMZ0M-BEUYyw"
    },
    {
      "key": "22", // Glasvegas
      "link": "https://open.spotify.com/track/6iGzT61oebzMCO5Hfr5TqM?si=1vYWP0PpQaiIgSLV6CUyAQ"
    },
    {
      "key": "23", // Mew
      "link": "https://open.spotify.com/track/7M5rFj5Ihc05LU1LM2tmZd?si=R3TXKT4ZR0OlWImZl_-uSA"
    },
    {
      "key": "24", // Fairy
      "link": "https://open.spotify.com/track/3VTNVsTTu05dmTsVFrmGpK?si=4FNus_K8RfmWMk1CY51Bcg"
    },
  ]
}


const getAlbumLink = i => {
  const albums = data.albumList;
  console.log({albums})
  const element = document.createElement('a');
  element.href = albums.find(({key}) => key === i.toString()).link;
  element.innerText = "LÄNK TILL LÅT";
  element.className = 'track-link';
  element.target = "_blank";
  return element;
}

const renderButton = (container, btn) => container.appendChild(btn);

const renderCards = () => {
  let openCards = localStorage.getItem('openCards');
  if (openCards) openCards = JSON.parse(openCards);
  const container = document.getElementsByClassName('cards-nav')[0];
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  
  for (let i = 1; i < 25; i++) {
    let currentDate = new Date();
    currentDate = new Date(today.getFullYear(), 11, i);
    const btn = document.createElement('button');
    const openable = currentDate <= today;
    const opened = openCards && openCards.includes(i);
    btn.addEventListener('click', () => {
      if (openable) {
        if ( !opened) {
          const el = getAlbumLink(i);
          btn.innerText = '';
          btn.appendChild(el) ;
          if (openCards) {
            openCards.push(i);
            localStorage.setItem('openCards', JSON.stringify(openCards));
          } else {
            let array = [];
            array.push(i)
            localStorage.setItem('openCards', JSON.stringify(array));
          }
        }
      }
    })
    
    btn.className = 'grid-item';
    
    if (opened) {
      btn.innerText = '';
      btn.appendChild(getAlbumLink(i));
      renderButton(container, btn);
    } 
    if (openable && !opened) {
      btn.className += ' openable'
      btn.innerText = i;
    }
    

    if (!openable) {
      btn.innerText = i;
    }

    renderButton(container, btn);
    
  }
}




renderCards();