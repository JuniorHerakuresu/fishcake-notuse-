import { readdirSync, lstatSync } from 'fs'

const Paths = new Array();
export function loadCommands(path) {
    readdirSync(path).forEach(file => {
        if (lstatSync(path + "/" + file).isDirectory()) loadCommands(path + "/" + file)
        else Paths.push(path + "/" + file)
    });
    return Paths;
};

const EventPath = new Array();
export function loadEvents(path) {
    readdirSync(path).forEach(file => {
        if (lstatSync(path + "/" + file).isDirectory()) loadEvents(path + "/" + file)
        else EventPath.push(path + "/" + file)
    });
    return EventPath;
};
