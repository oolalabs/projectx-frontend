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
              "text": "Top",
              "buttonAttributes": {
                "value": "top_01"
              }
            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.56445,
                "y": 0.6458
              },
              "text": "Skirt",
              "buttonAttributes": {
                "value": "skirt_01"
              }
            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.74805,
                "y": 0.32705
              },
              "text": "Bag",
              "buttonAttributes": {
                "value": "bag_01"
              }
            }),
            
            Taggd.Tag.createFromObject({
              "position": {
                "x": 0.64258,
                "y": 0.11924
              },
              "text": "Scarf",
              "buttonAttributes": {
                "value": "scarf_01"
              }
            }),
            
          ];

    const taggd = new Taggd(image, options, tags);

    $(".taggd__button").click(function(){
      var idx = "#" + $(this).val();
      $(".apparel").removeClass("list-group-item-primary");
      $(idx).addClass("list-group-item-primary");
      // alert(idx);
    });

  });
