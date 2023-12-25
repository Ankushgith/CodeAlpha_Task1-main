// ================ typing animation =======

var typed = new Typed(".typing",{
    strings:["","Web Developer","Java Developer","Web Designer","Python Programmer","Computer Science Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// ======== aside ==============

const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li");
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<totalNavList; i++)
        {

            const a= navList[i].querySelector("a");
            a.addEventListener("click", function()
            {
                removeBackSection();
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                       // allSection[j].classList.add("back-section");
                    }
                navList[j].querySelector("a").classList.remove("active");    
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth<1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }
        function removeBackSection()
        {
            
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
        }
        function addBackSection(num)
        {
            allSection[num].classList.add("back-section");
        }
        function showSection(element)
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("active");
            }
            const target =element.getAttribute("href").split("#")[1];
           document.querySelector("#" + target).classList.add("active")

        }
        function updateNav(element)
        {
            for(let i=0; i<totalNavList; i++)
            {
                navList[i].querySelector("a").classList.remove("active");
                const target =element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[i])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
            }
        }
        document.querySelector(".hire-me").addEventListener("click", function()
        {
            const sectionIndex = this.getAttribute("data-section-index");
            
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })
        const navTogglerbtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerbtn.addEventListener("click", () =>
            {
                asideSectionTogglerBtn();            
            })
            function  asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerbtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
 
            // contact

            const scriptsURL = 'https://script.google.com/macros/s/AKfycbxekDeRQr1c-5_K8TGt8diOKlPpB3EVCe4CSF_m82tNDwt8oJWxrjYRs-oIzwqJ8ao/exec'  
            const forms = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg")
          
            forms.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptsURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message Sent Successfully!!!"
                    setTimeout(function(){
                        msg.innerHTML = "Message Sent Successfully!!"
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })
