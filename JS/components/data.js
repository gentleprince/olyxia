// to fetch and display json data


export default async function olyxia() {
    // url
    const url = 'http://localhost:8158/olyxia.min.json'
    // fetch option
    const headers_option = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
    const response = await fetch(url, headers_option);
    const data = await response.json();
    // length of Json object gotten from api
    clients_length = data.olyxia.clients.length;
    let clients = data.olyxia.clients;
    let employees = data.olyxia.employees;

    // olyxia employee/team members
    btn_change.onclick = () => {
        // to show
        if (btn_change.classList.contains('show_team')) {
            const employee = employees.map(emp => {
                let teams = datas => `<div class="box mx-auto my-5 state_change">
                <div class="imgbox mt-2">
                    <img src="${emp.image}" alt="team" class="d-block mx-auto bg-warning">
                    <div class="details text-center bg-dark text-light mt-2 mx-auto">
                        <h6>${emp.name}</h6>
                        <p>${emp.position}</p>
                    </div>
                </div>
            </div>`
                team.insertAdjacentHTML("beforeend", teams(data));
            });
            btn_show_team.innerHTML = 'Close';
            btn_change.classList.replace('show_team', 'close_team');
        }
        // to close 
        else {
            const state_change = document.querySelectorAll('.state_change');
            for (let state of state_change) {
                team.removeChild(state);
                btn_change.innerHTML = 'See All Team';
                btn_change.classList.replace('close_team', 'show_team');
                team.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }

    // to display olyxia clients/testimonial
    const client = clients.map(clt => {
        let testimonials = datas => `<div class="card-body bg-light card_width">
                        <div class="card-head"> 
                            <img src='${clt['avatar']}' alt="Customers' Avatar" class="d-inline-block align-text-top bg-danger avatar">
                            <div class="details">
                                <div class="card-title">${clt['name']}</div>
                                <div class="card-subtitle mb-2 text-muted">${clt['title']}</div>
                            </div>
                        </div>
                        <div class="card-text">${clt['testimony']}</div>
                    </div>`;
        testimonial.insertAdjacentHTML('beforeend', testimonials(data));
    });
}