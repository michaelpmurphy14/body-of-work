document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.dataset.skillLevel;
        skillBar.style.width = '0%'; // Initialize at 0%
        setTimeout(() => {
            skillBar.style.width = `${skillLevel}%`; // Animate to the skill level
        }, 500);
    });
});
