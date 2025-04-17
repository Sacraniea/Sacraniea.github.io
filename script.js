const navbar = document.getElementById('mobilenav')

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (a) => updateNav(a))

function updateNav(a)
{
    const isMobile = a.matches
    console.log(a)
    if(isMobile)
    {
        navbar.setAttribute('inert', '')
    }

    else
    {
        navbar.removeAttribute('inert')
    }
}

function openNav()
{
    navbar.classList.add('show')
    navbar.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function closeNav()
{
    navbar.classList.remove('show')
    navbar.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}

updateNav(media)
