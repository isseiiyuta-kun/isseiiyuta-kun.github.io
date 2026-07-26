const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("✅ Thank you! Your environmental report has been submitted.");

    reportForm.reset();

});
