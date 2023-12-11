document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");
    const popup = document.querySelector(".popup");
    const popupTitle = document.querySelector(".popup h3");
    const popupContent = document.querySelector(".popup p");
    const closeBtn = document.querySelector(".popup-close-btn");
    const overlay = document.querySelector(".overlay");
    const mainContent = document.querySelector("main"); /* Update with your main content selector */
  
    images.forEach((image) => {
      image.addEventListener("click", () => {
        if (image.classList.contains("nso")) {
          popupTitle.textContent = "NSO";
          popupContent.textContent = "Behind the Scenes: NSOs play a crucial role in tracking scores, penalties, and timing during matches. They're volunteers and a vital part of the game day experience.";
        } else if (image.classList.contains("skaters")) {
          popupTitle.textContent = "SKATERS";
          popupContent.textContent = "Did you know? Our skaters train relentlessly to improve their skills. We have practice sessions three times a week to perfect our strategy and teamwork.";
        } else if (image.classList.contains("ref")) {
          popupTitle.textContent = "REFS";
          popupContent.textContent = "Fun Fact: A game requires a minimum of 10 referees to ensure fair play. Our referees come from various clubs, bringing diverse expertise to the game.";
        }
        else if (image.classList.contains("commentators-2")) {
          popupTitle.textContent = "COMMENTATORS";
          popupContent.textContent = "Meet Our Voices: Commentators add excitement and context to the game, explaining the action to the audience. They're passionate volunteers who amplify the energy of the game.";
        } else if (image.classList.contains("merch-bw")) {
          popupTitle.textContent = "MERCH STAND";
          popupContent.textContent = "Support Our Club: Run by dedicated volunteers, our merch stand offers a variety of items. Purchasing merch supports our club and helps fundraise for our activities.";
        }
        else if (image.classList.contains("penalty")) {
          popupTitle.textContent = "PENALTY BOX";
          popupContent.textContent = "Understanding Penalties: This is where skaters serve time for rule infractions. Penalties vary in severity and impact gameplay strategy.";
        } 
  
        // Show the popup and overlay
        popup.classList.add("active");
        overlay.classList.add("active");
      });
    });
  
    closeBtn.addEventListener("click", () => {
      // Close the popup and overlay
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
  



  // Set initial values
  document.getElementById('helmet-heading').innerText = 'JAMMER';
  document.getElementById('helmet-paragraph').innerText = 'The point scorer of the team. They aim to pass through opposing blockers scoring points for each opponent they legally pass. Jammers must be agile and swift to get through the pack.';

  function changeText(helmetType, description, activeImgSrc, clickedImg) {
    // Update text and description
    document.getElementById('helmet-heading').innerText = helmetType;
    document.getElementById('helmet-paragraph').innerText = description;

    // Deactivate all helmets
    document.querySelectorAll('.helmets img').forEach(img => {
      img.src = img.src.replace('-active', '-regular');
    });

    // Activate the clicked helmet
    clickedImg.src = activeImgSrc;
  }



  function swapClasses(clickedCard) {
    // Get references to all three cards
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    // Remove the clicked class from all cards
    card1.classList.remove('card-clicked');
    card2.classList.remove('card-clicked');
    card3.classList.remove('card-clicked');

    // Add the clicked class to the clicked card
    clickedCard.classList.add('card-clicked');

    // Get the current classes of each card
    const class1 = card1.className;
    const class2 = card2.className;
    const class3 = card3.className;

    // Swap the classes after a short delay to allow the animation to play
    setTimeout(() => {
      card1.className = class3;
      card2.className = class1;
      card3.className = class2;
    }, 500); // 500 milliseconds is the duration of the animation
  }