// To filter the recipe //
const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".recipe-card");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        cards.forEach(card => {
          card.style.display =
            filter === "all" || card.classList.contains(filter) ? "block" : "none";
        });
      });
    });


// To open the recipe details upon click //

    function openRecipeDetail(id) {
      document.getElementById(id).style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
     }

    function closeRecipeDetail(id) {
      document.getElementById(id).style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }

//To add an overlay behind popup//

const overlay = document.getElementById('overlay');
if (overlay) {
  overlay.addEventListener('click', () => {
    const details = document.querySelectorAll('.recipe-detail');
    details.forEach(d => d.style.display = 'none');
    overlay.style.display = 'none';
  });
}

// To print the receipe details //

function printRecipe(id) {
  const content = document.getElementById(id).innerHTML;
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<html><head><title>Print Recipe</title></head><body>${content}</body></html>`);
  printWindow.document.close();
  printWindow.print();
}
