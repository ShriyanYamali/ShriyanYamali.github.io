const product = [
    {
        id: 0,
        case_number: 'M.11535',
        access_link: 'https://competition-cases.ec.europa.eu/cases/M.11535',
        last_decision_date: '14.06.2024',
        companies: 'APG ASSET MANAGEMENT | STONEPEAK | EUNETWORKS',
        regulation: 'Council Regulation 139/2004',
        notification_date: '22.05.2024',
        provisional_deadline: '26.06.2024',
        economic_activities: 'J.61.90 - Other telecommunications activities',
        prior_publication_in_OJ: 'C3513 of 31.05.2024',
    },
    {
        id: 1,
        case_number: 'M.11522',
        access_link: 'https://competition-cases.ec.europa.eu/cases/M.11522',
        last_decision_date: '14.06.2024',
        companies: 'CERBERUS | VELOBANK',
        regulation: 'Council Regulation 139/2004',
        notification_date: '23.05.2024',
        provisional_deadline: '27.06.2024',
        economic_activities: 'G.47.19 - Other retail sale in non-specialised stores K.64.19 - Other monetary intermediation K.65.1 - Insurance',
        prior_publication_in_OJ: 'C3514 of 31.05.2024'
    },
    {
        id: 2,
        case_number: 'M.11521',
        access_link: 'https://competition-cases.ec.europa.eu/cases/M.11521',
        last_decision_date: '13.06.2024',
        companies: 'DKV MOBILITY GROUP | SMART DIESEL | TAX REFUND',
        regulation: 'Council Regulation 139/2004',
        notification_date: '21.05.2024',
        provisional_deadline: '25.06.2024',
        economic_activities: 'G.47.30 - Retail sale of automotive fuel in specialised stores H.52.29 - Other transportation support activities',
        prior_publication_in_OJ: 'C3497 of 29.05.2024'
    },
    {
        id: 3,
        case_number: 'M.11428',
        access_link: 'https://competition-cases.ec.europa.eu/cases/M.11428',
        last_decision_date: '13.06.2024',
        companies: 'ZGC ENV | DEUTZ CHINA | JV',
        regulation: 'Council Regulation 139/2004',
        notification_date: '22.05.2024',
        provisional_deadline: '26.06.2024',
        economic_activities: ' C.28.11 - Manufacture of engines and turbines, except aircraft, vehicle and cycle engines C.28.9 - Manufacture of other special-purpose machinery M.72.1 - Research and experimental development on natural sciences and engineering',
        prior_publication_in_OJ: 'C3515 of 31.05.2024'
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.case_number.toLowerCase().includes(searchData),
            item.access_link.toLowerCase().includes(searchData) ||
            item.last_decision_date.toLowerCase().includes(searchData) ||
            item.companies.toLowerCase().includes(searchData) ||
            item.regulation.toLowerCase().includes(searchData) ||
            item.notification_date.toLowerCase().includes(searchData) ||
            item.provisional_deadline.toLowerCase().includes(searchData) ||
            item.economic_activities.toLowerCase().includes(searchData) ||
            item.prior_publication_in_OJ.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var {  case_number, access_link, last_decision_date, companies, regulation, notification_date, provisional_deadline, economic_activities, prior_publication_in_OJ } = item;
        return (
            `<div class='box'>
                <div class='bottom'>
                    <h2>Case #: ${case_number}</h2>
                    <br>
                    <p>Access Link: <a class="a" href="${access_link}" target="_blank">${access_link}</a></p>
                    <br>
                    <p>Last Decision Date ${last_decision_date}</p>
                    <br>
                    <p>Companies: ${companies}<p>
                    <br>
                    <p>Regualtion: ${regulation}<p>
                    <br>
                    <p>Notification Date: ${notification_date}<p>
                    <br>
                    <p>Provisional Deadline: ${provisional_deadline}<p>
                    <br>
                    <p>Economic Activities: ${economic_activities}<p>
                    <br>
                    <p>Prior Publication in OJ: ${prior_publication_in_OJ}<p>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

displayItem(product);

// Event listener for keyup on search input
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    performSearch(searchData);
});

// Functionality to clear search input
document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('searchBar').value = '';
    displayItem(product); // Display all items again when clearing the search
});