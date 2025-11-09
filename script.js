// simple page toggle (cover -> content)
const openGiftBtn = document.getElementById('openGift');
const coverPage = document.getElementById('coverPage');
const contentPage = document.getElementById('contentPage');

openGiftBtn.addEventListener('click', () => {
  coverPage.classList.remove('active');
  contentPage.classList.add('active');
  // optional: focus top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
