const dragAndDropItems = document.getElementById('team-members');

new Sortable(dragAndDropItems, {
    animation: 350,
    chosenClass: "team-member-chosen",
    dragClass: "team-member-drag",
    onSort: function (/**Event*/evt) {
        // Récupérer la première balise img après le tri
        const firstTeamMember = dragAndDropItems.querySelector('.team-member');

        // Récupérer l'URL de l'image du premier membre de l'équipe après le tri
        const imageUrl = firstTeamMember.querySelector('img').getAttribute('src');

        // Appliquer l'image de fond à la div 'team-members'
        document.body.style.backgroundImage = `url(${imageUrl})`;
    }
});
