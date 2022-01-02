export default class Command {

    constructor(name, interaction) {
        this.name = name;
        this.interaction = interaction;
    }

    setCooldown(cooldown) {
        this.cooldown = cooldown;
        return this;
    }
    setPermissions(permissions) {
        this.permissions = permissions;
        return this;
    }
    setBotPermissions(permissions) {
        this.permissions = permissions;
        return this;
    }
    slashCommand(slashcommand) {
        this.slashcommand = slashcommand;
    }


}
