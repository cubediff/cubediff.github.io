let viewer;
let tabData = [
  { name: "Ours OOD", buttons: [
    { name: "Munch", link: "./static/images/panoramas/munch_generated_2.png", cond: "./static/images/panoramas/conditions/munch_generated_2_0.png", text: ''},
    { name: "Starry Night", link: "./static/images/panoramas/van_gogh_stary_night_generated.png", cond: "./static/images/panoramas/conditions/van_gogh_stary_night_generated_0.png", text: ''},
    { name: "Industrial", link: "./static/images/panoramas/industrial_generated.png", cond: "./static/images/panoramas/conditions/industrial_generated_0.png", text: ''},
    { name: "Space", link: "./static/images/panoramas/interstellar_generated.png", cond: "./static/images/panoramas/conditions/interstellar_generated_0.png", text: ''},
    { name: "Greenhouse", link: "./static/images/panoramas/greenhouse_generated.png", cond: "./static/images/panoramas/conditions/greenhouse_generated_0.png", text: ''},
    { name: "Babel", link: "./static/images/panoramas/babel_generated_2.png", cond: "./static/images/panoramas/conditions/babel_generated_2_0.png", text: ''},
    { name: "Alice", link: "./static/images/panoramas/alice6_generated.png", cond: "./static/images/panoramas/conditions/alice6_generated_0.png", text: ''},
    { name: "Alice 2", link: "./static/images/panoramas/alice3_generated.png", cond: "./static/images/panoramas/conditions/alice3_generated_0.png", text: ''},
    { name: "Abandoned", link: "./static/images/panoramas/abandoned_2_generated.jpeg", cond: "./static/images/panoramas/conditions/abandoned_2_generated_0.png", text: ''},
    { name: "Tree", link: "./static/images/panoramas/lonelytree.png", cond: "./static/images/panoramas/conditions/lonelytree_0.png", text: ''},
    { name: "Balloon", link: "./static/images/panoramas/hotairballoon_generated.png", cond: "./static/images/panoramas/conditions/hotairballoon_generated_0.png", text: ''},
    { name: "Starry Night 2", link: "./static/images/panoramas/van_gogh_starry_night_generated_2.png", cond: "./static/images/panoramas/conditions/van_gogh_starry_night_generated_2_0.png", text: ''},
    { name: "Kitchen", link: "./static/images/panoramas/kitchen_generated.png", cond: "./static/images/panoramas/conditions/kitchen_generated_0.png", text: ''},
    { name: "Library", link: "./static/images/panoramas/library_with_globe.png", cond: "./static/images/panoramas/conditions/library_with_globe_0.png", text: ''},
    { name: "Munch 2", link: "./static/images/panoramas/munch_generated.png", cond: "./static/images/panoramas/conditions/munch_generated_0.png", text: ''},
    { name: "Skyline", link: "./static/images/panoramas/skyline_generated.png", cond: "./static/images/panoramas/conditions/skyline_generated_0.png", text: ''},
    { name: "Snow", link: "./static/images/panoramas/snow_generated.png", cond: "./static/images/panoramas/conditions/snow_generated_0.png", text: ''},
    { name: "Library 2", link: "./static/images/panoramas/library_with_books.png", cond: "./static/images/panoramas/conditions/library_with_books_0.png", text: ''},
    { name: "Babel 2", link: "./static/images/panoramas/babel_generated.png", cond: "./static/images/panoramas/conditions/babel_generated_0.png", text: ''},
    { name: "Alice 3", link: "./static/images/panoramas/alice1_generated.png", cond: "./static/images/panoramas/conditions/alice1_generated_0.png", text: ''},
    { name: "Alice 4", link: "./static/images/panoramas/alice5_generated.png", cond: "./static/images/panoramas/conditions/alice5_generated_0.png", text: ''},
    { name: "Living Room", link: "./static/images/panoramas/livingroom_generated.png", cond: "./static/images/panoramas/conditions/livingroom_generated_0.png", text: ''},
    { name: "Library 3", link: "./static/images/panoramas/library_generated.png", cond: "./static/images/panoramas/conditions/library_generated_0.png", text: ''},
    { name: "Coral reef", link: "./static/images/panoramas/coral_reef_generated_2.png", cond: "./static/images/panoramas/conditions/coralreef.jpeg", text: ''},
    { name: "Lighthouse", link: "./static/images/panoramas/lighthouse_generated_3.png", cond: "./static/images/panoramas/conditions/lighthouse.png", text: ''},
    { name: "Lighthouse 2", link: "./static/images/panoramas/lighthouse_generated_2.png", cond: "./static/images/panoramas/conditions/lighthouse_2.jpeg", text: ''},
    { name: "Steampunk", link: "./static/images/panoramas/steampunk_generated.png", cond: "./static/images/panoramas/conditions/steampunk.jpg", text: ''},
  ] },
];



$(document).ready(function () {
  

  viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "default": {
        "firstScene": "first",
    },
    "scenes": {
        "first": {
            "type": "equirectangular",
            "panorama": tabData[0].buttons[0].link,
            "autoLoad": true,
        },
    }
    
  });

  var img = $('<img>'); // Create an image element
  img.attr('src', tabData[0].buttons[0].cond); // Set the image source
  $('#cond-image').append(img); // Append the image to the di
  $("#cond-text").text(tabData[0].buttons[0].text); 

  $('#cond-image img').on('error', function() {
    $(this).hide(); 
  });

  // Create tab content with buttons
  var tabContent = $('#tabContent');
  $.each(tabData, function(tabIndex, tab) {
    var tabDiv = $('<div id="tab' + (tabIndex + 1) + '" class="content-tab"></div>');
    if (tabIndex > 0) {
      tabDiv.hide();
    }

    // Add a div to center the buttons
    var buttonContainer = $('<div class="has-text-centered"></div>'); 

    $.each(tab.buttons, function(buttonIndex, buttonData) {
      var button = $('<a class="button" data-tab-index="' + tabIndex + '" data-button-index="' + buttonIndex + '" data-link="' + buttonData.link + '" data-text="' + buttonData.text  + '" data-cond="' + buttonData.cond + '">' + buttonData.name + '</a>');
      buttonContainer.append(button); 
    });
    tabDiv.append(buttonContainer); 
    tabContent.append(tabDiv);
  });

  // Tab click handling
  $('#myTabs li').click(function() {
    var tabId = $(this).data('tab');
    $('#myTabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('.content-tab').hide();
    $('#' + tabId).show();

    $('a').filter(function() {
      return 'tab' + ($(this).data('tab-index') +1) === tabId && $(this).data('button-index') === 0;
    }).click();
  });

  // Button click handling
  $('#tabContent a').click(function() {
    $('#tabContent a').removeClass('is-active');
    $(this).addClass('is-active');
    var tabIndex = $(this).data('tab-index');
    var buttonIndex = $(this).data('button-index');
    var link = $(this).data('link'); 
    var cond = $(this).data('cond'); 
    var text = $(this).data('text'); 
    myCustomFunction(tabIndex, buttonIndex, link, cond, text);
  });
});

function myCustomFunction(tabIndex, buttonIndex, link, cond, text) {
  viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "default": {
        "firstScene": "first",
    },
    "scenes": {
        "first": {
            "type": "equirectangular",
            "panorama": link,
            "autoLoad": true,
        },
    }
    
  });

  $('#cond-image img').attr('src', cond);  
  $('#cond-image img').show();
  $("#cond-text").text(text); 

}
