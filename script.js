// FAQ accordion
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-faq]");
  if (!btn) return;
  const item = btn.closest(".item");
  item.classList.toggle("open");
});

// lightweight “request” form UX (no backend yet)
function fakeSubmit(formId){
  const el = document.getElementById(formId);
  if(!el) return;
  el.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Submitted! (Next step: we’ll connect this to your CRM + Stripe.)");
  });
}
fakeSubmit("contactForm");
fakeSubmit("requestForm");
