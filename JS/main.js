let Lbtn = document.getElementById('btn-l');
let Linput  = document.getElementById('input-l');
let Rbtn = document.getElementById('btn-r');
let Rinput = document.getElementById('input-r');
//declaration PortfolioBlock & SkillsBlock
let PortfolioBlock = document.getElementById('portfolio');
let SkillsBlock = document.getElementById('skills');
//declaration BtnToggleTheme & ChangeImg
const BtnToggleTheme = document.getElementById('BtnToggleTheme');
const ChangeImg = document.getElementById('ChangeImg');
//Social-Network image
const img1 = document.getElementById('SocialNet1');
const img2 = document.getElementById('SocialNet2');
const img3 = document.getElementById('SocialNet3');
const img4 = document.getElementById('SocialNet4');
function setLightTheme() {
	document.body.classList.add('light');
	ChangeImg.src = 'img/lightTheme.png';
	localStorage.theme = 'light';

	img1.src = 'img/light-network/github.png';
	img2.src = 'img/light-network/linkedin.png';
	img3.src = 'img/light-network/twitter.png';
	img4.src = 'img/light-network/youtube.png';
}
function setDarkTheme() {
	document.body.classList.remove('light');
	ChangeImg.src = 'img/darkTheme.png';
	localStorage.theme = 'dark';

	img1.src = 'img/dark-network/github.png';
	img2.src = 'img/dark-network/linkedin.png';
	img3.src = 'img/dark-network/twitter.png';
	img4.src = 'img/dark-network/youtube.png';
}
function ToggleTheme() {
		if (document.body.classList.contains('light')) setDarkTheme()
		else setLightTheme()
}
if (localStorage.theme == 'light') setLightTheme();

function btn_l(){		//Function btn-l this is the Portfolio-block(show)
	Linput.checked = true;
	if(Linput.checked == true){
		Lbtn.setAttribute("id","Tabs-btn");
		//hide skills, show portfolio
		PortfolioBlock.removeAttribute('id');
		SkillsBlock.setAttribute("id","hidden");
	}if(Rinput.checked == true){
		Rinput.checked = false;
		Rbtn.removeAttribute('id');
}}
function btn_r(){		//Function btn-r this is the Skills-block(show)
	Rinput.checked = true;
	if(Rinput.checked == true){
		Rbtn.setAttribute("id","Tabs-btn");
		//hide portfolio, show skills
		SkillsBlock.removeAttribute('id');
		PortfolioBlock.setAttribute("id","hidden");
	}if(Linput.checked == true){
		Linput.checked = false;
		Lbtn.removeAttribute('id');	
}}
btn_l()