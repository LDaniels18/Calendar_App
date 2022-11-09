
//https://www.sliderrevolution.com/resources/html-calendar/
// https://www.w3schools.com/js/js_output.asp

function toMonth() {
  const d = new Date();
  let month = d.getMonth();
  // let month =1;
  if(month == 1)
    favicon.setAttribute("href", "assets/jan.ico"); 
  else if(month == 2)
    favicon.setAttribute("href", "assets/feb.ico"); 
  else if(month == 3)
    favicon.setAttribute("href", "assets/march.ico"); 
  else if(month == 4)
    favicon.setAttribute("href", "assets/april.ico");
  else if(month == 5)
    favicon.setAttribute("href", "assets/may.ico"); 
  else if(month == 6)
    favicon.setAttribute("href", "assets/june.ico"); 
  else if(month == 7)
    favicon.setAttribute("href", "assets/jul.ico");
  else if(month == 8)
    favicon.setAttribute("href", "assets/aug.ico"); 
  else if(month == 9)
    favicon.setAttribute("href", "assets/sept.ico"); 
  else if(month == 10)
    favicon.setAttribute("href", "assets/oct.ico");
  else if(month == 11)
    favicon.setAttribute("href", "assets/nov.ico"); 
  else
    favicon.setAttribute("href", "assets/dec.ico"); 
}

// function toFeb() {

//   favicon.setAttribute("href", "assets/feb.ico");
// }

var app = {
    settings: {
      container: $('.calendar'),
      calendar: $('.front'),
      days: $('.weeks span'),
      form: $('.back'),
      input: $('.back input'),
      buttons: $('.back button')
    },
  
    init: function() {
      instance = this;
      settings = this.settings;
      this.bindUIActions();
    },
  
    swap: function(currentSide, desiredSide) {
      settings.container.toggleClass('flip');
  
      currentSide.fadeOut(900);
      currentSide.hide();
      desiredSide.show();
  
    },
  
    bindUIActions: function() {
      settings.days.on('click', function(){
        instance.swap(settings.calendar, settings.form);
        settings.input.focus();
      });
  
      settings.buttons.on('click', function(){
        instance.swap(settings.form, settings.calendar);
      });
    }
  }
  
  app.init();