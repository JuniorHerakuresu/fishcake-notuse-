export default class Command {

    constructor(name, command) {
        this.name = name;
        this.command = command;
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
    slashCommand(slashCommand) {
        this.slashCommand = slashCommand;
        return this;
    }

    setSlashData(data) {
        this.data = data;
        return this;
    }

}
