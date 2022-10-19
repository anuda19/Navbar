window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "#fff";
      document.getElementById('navItemServices').style.color = '#000'
      document.getElementById('navItemAbout').style.color = '#000'
      document.getElementById('navItemCompany').style.color = '#000'
      document.getElementById('navItemCareer').style.color = '#000'
      document.getElementById('navItemLogin').style.color = '#000'
      document.getElementById('navItemSearch').style.color = '#000'
      document.querySelector('.top_bar').style.color = '#000'
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById('navItemServices').style.color = '#fff'
        document.getElementById('navItemAbout').style.color = '#fff'
        document.getElementById('navItemCompany').style.color = '#fff'
        document.getElementById('navItemCareer').style.color = '#fff'
        document.getElementById('navItemLogin').style.color = '#fff'
        document.getElementById('navItemSearch').style.color = '#fff'
        document.querySelector('.top_bar').style.color = '#fff'
    }
  }


  const input = document.getElementById('search_input')
  input.style.display = 'none'
  const search = document.getElementById('navItemSearch')
  const icon = document.getElementById('cross_icon')
  icon.style.display = 'none'
  const showInput = ()=>{
    input.style.display = 'block'
    icon.style.display = 'block'
    search.style.display = 'none'
  }

  const hideInput = ()=>{
    input.style.display = 'none'
    icon.style.display = 'none'
    search.style.display = 'block'
  }