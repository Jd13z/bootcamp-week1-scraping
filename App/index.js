let btnscrap = document.getElementById('scrap-profile');

btnscrap.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if(tab!==null){
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: scrapingProfile,
          });
    }
})

const scrapingProfile = ()=>{
    const wait = function(milliseconds){
        return new Promise(function(resolve){
            setTimeout(function() {
                resolve();
            }, milliseconds);
        });

    };


    //Personal information
    const elementNameProfile = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 ul li")
    const elementNameTitle = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 h2")
    const elementNameLocation = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 ul.pv-top-card--list-bullet li")

    const name = elementNameProfile? elementNameProfile.innerText:'';
    const title = elementNameTitle? elementNameTitle.innerText:'';
    const location = elementNameLocation? elementNameLocation.innerText:'';

    //Education informaction
    const elementsEducation = document.querySelectorAll('#education-section ul li');
    elementsEducation.forEach((element => {
        
    }));


    wait(2000)
    const elementMoreResume = document.getElementById('line-clamp-show-more-button')
    if(elementMoreResume) elementMoreResume.click();
    const elementResume = document.querySelector('section.pv-about-section > p')
    const resume = elementResume.innerText


    console.log({name,title,resume,location})
}
