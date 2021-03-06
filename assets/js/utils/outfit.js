 document.addEventListener("DOMContentLoaded", function (event) {



    // var image = document.getElementById('image');
    // //Remove default event
    // var options = {show: '', hide: ''};
    // var yodaTagData = {
    //   position: {"x": 0.35, "y": 0.23},
    //   text: "Yoda", //hover text
    //   button: {id: "yoda-button", class: "taggd-button"},
    //   hover: {id: "yoda-hover", class: "taggd-hover"},
    //   height: 1000, //border height in percentages from image size
    //   width: 1000   //border width in percentages from image size
    // };
    // //create tag object
    // var yodaTag = new Taggd.Tag(yodaTagData.position, yodaTagData.text, yodaTagData.button, yodaTagData.hover);
    // //Set tag height/width
    // yodaTag.buttonElement.style.height = yodaTagData.height.toString() + "%";
    // yodaTag.buttonElement.style.width = yodaTagData.width.toString() + "%";
    // //Set custom events
    // yodaTag.buttonElement.addEventListener('mouseenter', function () {
    //   yodaTag.buttonElement.style.opacity = 0.9;
    //   yodaTag.show()
    // });
    // yodaTag.buttonElement.addEventListener('mouseleave', function () {
    //   yodaTag.buttonElement.style.opacity = 0.2;
    //   yodaTag.hide()
    // });
    // yodaTag.buttonElement.addEventListener('click', function () {
    //   window.open("https://en.wikipedia.org/wiki/Yoda");
    // });
    // //init Taggd
    // var taggd = new Taggd(image, options, [yodaTag]);
    
    
    

    const image = document.getElementById('image');
    const options = {};
    const tags = [
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.54102,
                "y": 0.34268
              },
              "text": "Casual Long Sleeve Top",
              "buttonAttributes": {
                "value": "top_01"
              },
              "popupAttributes": {
                "id": "popup_top_01",
                "value": "top_01"
              }
            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.56445,
                "y": 0.6458
              },
              "text": "Plaid Long Skirt",
              "buttonAttributes": {
                "value": "skirt_01"
              },
              "popupAttributes": {
                "id": "popup_skirt_01",
                "value": "skirt_01"
              }

            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.74805,
                "y": 0.32705
              },
              "text": "Leather Shoulder Bag",
              "buttonAttributes": {
                "value": "bag_01"
              },
              "popupAttributes": {
                "id": "popup_bag_01",
                "value": "bag_01"
              }

            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.64258,
                "y": 0.11924
              },
              "text": "Elegant Large Silk Scarf",
              "buttonAttributes": {
                "value": "scarf_01"
              },
              "popupAttributes": {
                "id": "popup_scarf_01",
                "value": "scarf_01"
              }

            }),
            
          ];

    const taggd = new Taggd(image, options, tags);

    setInterval(function(){
      $(".taggd__button").unbind().on('click touchstart', function () {
        var idx = "#" + $(this).val();
        $(".apparel").removeClass("list-group-item-primary");
        $(idx).addClass("list-group-item-primary");
        var popup_idx = "#popup_" + $(this).val();
        $(".taggd__popup").css("display", "none");
        $(popup_idx).css("display", "");
        // alert(idx);
      });

      $(".taggd__popup").unbind().on('click touchstart', function () {
        var idx = "#" + $(this).attr('value');
        $('html, body').animate({
            scrollTop: $(idx).offset().top - 50
        }, 1000);
      });

      $(".apparel").unbind().on('click touchstart', function () {
        $(".apparel").removeClass("list-group-item-primary");
        $(this).addClass("list-group-item-primary");
        var popup_idx = "#popup_" + $(this).attr("id");
        $(".taggd__popup").css("display", "none");
        $(popup_idx).css("display", "");
      });
    }, 3000);

    

  });
