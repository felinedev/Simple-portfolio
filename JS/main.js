let Lbtn = document.getElementById('btn-l');
let Linput  = document.getElementById('input-l');
let Rbtn = document.getElementById('btn-r');
let Rinput = document.getElementById('input-r');
//declaration PortfolioBlock & SkillsBlock
let PortfolioBlock = document.getElementById('portfolio');
let SkillsBlock = document.getElementById('skills');

function btn_l(){		//Function btn-l this is the Portfolio-block(show)
	Linput.checked = true;

	if(Linput.checked == true){
		Lbtn.setAttribute("id","Tabs-btn");
		//hide skills, show portfolio
		PortfolioBlock.removeAttribute('id');
		SkillsBlock.setAttribute("id","hidden");
	}
	if(Rinput.checked == true){
		Rinput.checked = false;
		Rbtn.removeAttribute('id');
	}
}
function btn_r(){		//Function btn-r this is the Skills-block(show)
	Rinput.checked = true;

	if(Rinput.checked == true){
		Rbtn.setAttribute("id","Tabs-btn");
		//hide portfolio, show skills
		SkillsBlock.removeAttribute('id');
		PortfolioBlock.setAttribute("id","hidden");
	}
	if(Linput.checked == true){
		Linput.checked = false;
		Lbtn.removeAttribute('id');	
	}
}
btn_l()