$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('.content').fadeOut(2000, newpage);
});
function newpage() {
window.location = newLocation;
}
