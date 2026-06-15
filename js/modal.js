function openMember(memberId){

    const member =
    memberData[memberId];

    document.getElementById("modal")
    .style.display = "block";

    document.getElementById("modalImg")
    .src = member.image;

    document.getElementById("modalName")
    .textContent = member.name;

    document.getElementById("modalAbout")
    .textContent = member.about;

    document.getElementById("modalCollege")
    .textContent = member.college;

    document.getElementById("modalDegree")
    .textContent = member.degree;

    document.getElementById("modalEmail")
    .textContent = member.email;

    document.getElementById("modalGithub")
    .href = member.github;

    document.getElementById("modalLinkedin")
    .href = member.linkedin;

    const skillsContainer =
    document.getElementById("modalSkills");

    skillsContainer.innerHTML = "";

    member.skills.forEach(skill => {

        const span =
        document.createElement("span");

        span.classList.add("skill");

        span.textContent = skill;

        skillsContainer.appendChild(span);

    });

}

document
.getElementById("closeBtn")
.addEventListener("click", () => {

    document.getElementById("modal")
    .style.display = "none";

});

document
.getElementById("modal")
.addEventListener("click", e => {

    if(
        e.target ===
        document.getElementById("modal")
    ){

        document.getElementById("modal")
        .style.display = "none";

    }

});


