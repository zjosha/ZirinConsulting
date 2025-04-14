var AboutList = [
                    "Reserve review and evaluation for all Property & Casualty lines of business", 
                    "Statutory statement of actuarial opinion preparation",
                    "Board and management reporting",
                    "Excess insurance validation",
                    "Captive evaluation and feasibility studies",
                    "Cost allocation studies",
                    "Peer Review services",
                    "Financial Planning and long term models",
                    "Risk and capital models"
                ];

window.onload = main();

function main() {
    var aboutListContainer  = document.getElementById("AboutListContainer");
    for (let i = 0; i < AboutList.length; i++) {
        aboutListContainer.appendChild(createListItem(AboutList[i], i));
    }
}

function createListItem(string, i) {
    let placements = [0, 5, 13, 20]
    
    let li = document.createElement('li');
    li.className = "AboutListItem";

    if (i === 0) {
        li.style.marginLeft = '5%';
    } else {
        let seed = Math.floor(Math.random() * 4);
        let placement = placements[seed];
        if ((i % 2) === 0) {
            li.style.marginLeft = `${placement}%`;
        } else {
            placement += 50;
            li.style.marginLeft = `${placement}%`;
        }
    }

    var p = document.createElement('p');
    p.innerHTML = string;

    li.appendChild(p)
    return li;
}

