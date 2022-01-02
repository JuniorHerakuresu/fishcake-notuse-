export default class Embed {
    constructor(data = {}) {
        this.title = data.title;
        this.type = `rich`;
        this.description = data.description;
        this.thumbnail = data.thumbnail;
        this.author = data.author;
        this.color = data.color;
        this.timestamp = data.timestamp;
        this.image = data.image;
        this.footer = data.footer;
        this.url = data.url;
        this.fields = data.fields || [];
    }
    setTitle(title) {
        if (title.length > 256) throw new Error('The _title should not be longer than 265 characters.');
        this.title = title;
        return this;
    }

    setDescription(description) {
        if (description.length > 4096) throw new Error('The description should not be longer than 265 characters.');
        this.description = description;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    setColor(color) {
        let base = 10;
        if (typeof color === 'string' && color.startsWith('#')) {
            color = color.replace('#', '');
            base = 16;
        }
        color = parseInt(color, base);
        if (color < 0 || color > 0xFFFFFF) throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        else if (color && isNaN(color)) throw new Error('Could not convert color to number.');
        this.color = color;
        return this;
    }

    setAuthor(name, icon_url, url) {
        this.author = { name, icon_url, url };
        return this;
    }
    setThumbnail(url) {
        this.thumbnail = { url };
        return this;
    }
    setFooter(text, icon_url) {
        this.footer = { text, icon_url };
        return this;
    }
    setTimestamp(timestamp = new Date()) {
        this.timestamp = timestamp;
        return this;
    }
    addFields(fields) {
        this.fields = fields;
        return this;
    }
    setImage(url, options = {}) {
        this.image = { url, height: options.height, width: options.width };
        return this;
    } get sendable() {
        return {
            title: this.title,
            type: this.type,
            color: this.color,
            author: this.author,
            description: this.description,
            fields: this.fields
        }
    }
};

/** @example */
/* @example
new Embed()
 .setColor(`#FF0000`)
 .setDescription(`Thats a desc`)
 .setAuthor(message.member.username, message.member.avatarURL)
 .setTimestamp()
 .setFooter(`test`, message.member.avatarURL)
 .setThumbnail(message.member.avatarURL)
 .setImage(message.member.avatarURL)
 .addFields([{
     name: `test`,
     value: `tes`
 },
 {
     name: `test2`,
     value: `tesss2`
 }])
*/