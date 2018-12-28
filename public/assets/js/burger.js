// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devourburgers").on("click", function(event) {
    var id = $(this).data("id");
    var devouredBurger = $(this).data("devouredburger");

    var devouredburg = {
      devoured: devouredBurger
    };
console.log(devouredBurger)
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devouredburg
    }).then(
      function() {
        console.log("the devoured burger ", devouredBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".burger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var eat = {
      burger_name: $("#eatburger").val().trim(),
    
    };

    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: eat
    }).then(
      function() {
        console.log("burger created ");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
