function skillsMember(){
    return {
        name: 'skills-member',
        template: `
            <div class="skills-member">
                <div class="skills-member__avatar">
                    <img :src="avatar" alt="Avatar">
                </div>
            </div>
        `
    };
}