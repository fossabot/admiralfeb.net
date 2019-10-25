// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    entry: Entry[];
}

export interface Entry {
    id: string;
    hash: string;
    requestHash: string;
    profileUrl: string;
    preferredUsername: string;
    thumbnailUrl: string;
    photos: Photo[];
    profileBackground: ProfileBackground;
    name: Name;
    displayName: string;
    aboutMe: string;
    emails: Email[];
    accounts: Account[];
    urls: URL[];
}

export interface Account {
    domain: string;
    display: string;
    url: string;
    username: string;
    verified: string;
    shortname: string;
}

export interface Email {
    primary: string;
    value: string;
}

export interface Name {
    givenName: string;
    familyName: string;
    formatted: string;
}

export interface Photo {
    value: string;
    type?: string;
}

export interface ProfileBackground {
    color: string;
}

export interface URL {
    value: string;
    title: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
    export function toWelcome(json: string): Welcome {
        return cast(JSON.parse(json), r('Welcome'));
    }

    export function welcomeToJson(value: Welcome): string {
        return JSON.stringify(uncast(value, r('Welcome')), null, 2);
    }

    function invalidValue(typ: any, val: any): never {
        throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
    }

    function jsonToJSProps(typ: any): any {
        if (typ.jsonToJS === undefined) {
            const map: any = {};
            typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
            typ.jsonToJS = map;
        }
        return typ.jsonToJS;
    }

    function jsToJSONProps(typ: any): any {
        if (typ.jsToJSON === undefined) {
            const map: any = {};
            typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
            typ.jsToJSON = map;
        }
        return typ.jsToJSON;
    }

    function transform(val: any, typ: any, getProps: any): any {
        function transformPrimitive(typ1: string, val1: any): any {
            if (typeof typ1 === typeof val1) { return val1; }
            return invalidValue(typ1, val1);
        }

        function transformUnion(typs: any[], val1: any): any {
            // val must validate against one typ in typs
            const l = typs.length;
            for (let i = 0; i < l; i++) {
                const typ1 = typs[i];
                try {
                    return transform(val1, typ1, getProps);
                } catch (_) { }
            }
            return invalidValue(typs, val1);
        }

        function transformEnum(cases: string[], val1: any): any {
            if (cases.indexOf(val1) !== -1) { return val1; }
            return invalidValue(cases, val1);
        }

        function transformArray(typ1: any, val1: any): any {
            // val must be an array with no invalid elements
            if (!Array.isArray(val)) { return invalidValue('array', val1); }
            return val1.map(el => transform(el, typ1, getProps));
        }

        function transformObject(props: { [k: string]: any }, additional: any, val1: any): any {
            if (val1 === null || typeof val1 !== 'object' || Array.isArray(val1)) {
                return invalidValue('object', val1);
            }
            const result: any = {};
            Object.getOwnPropertyNames(props).forEach(key => {
                const prop = props[key];
                const v = Object.prototype.hasOwnProperty.call(val1, key) ? val1[key] : undefined;
                result[prop.key] = transform(v, prop.typ, getProps);
            });
            Object.getOwnPropertyNames(val1).forEach(key => {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = transform(val1[key], additional, getProps);
                }
            });
            return result;
        }

        if (typ === 'any') { return val; }
        if (typ === null) {
            if (val === null) { return val; }
            return invalidValue(typ, val);
        }
        if (typ === false) { return invalidValue(typ, val); }
        while (typeof typ === 'object' && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ)) { return transformEnum(typ, val); }
        if (typeof typ === 'object') {
            return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
                    : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
                        : invalidValue(typ, val);
        }
        return transformPrimitive(typ, val);
    }

    function cast<T>(val: any, typ: any): T {
        return transform(val, typ, jsonToJSProps);
    }

    function uncast<T>(val: T, typ: any): any {
        return transform(val, typ, jsToJSONProps);
    }

    function a(typ: any) {
        return { arrayItems: typ };
    }

    function u(...typs: any[]) {
        return { unionMembers: typs };
    }

    function o(props: any[], additional: any) {
        return { props, additional };
    }

    function m(additional: any) {
        return { props: [], additional };
    }

    function r(name: string) {
        return { ref: name };
    }

    const typeMap: any = {
        Welcome: o([
            { json: 'entry', js: 'entry', typ: a(r('Entry')) },
        ], false),
        Entry: o([
            { json: 'id', js: 'id', typ: '' },
            { json: 'hash', js: 'hash', typ: '' },
            { json: 'requestHash', js: 'requestHash', typ: '' },
            { json: 'profileUrl', js: 'profileUrl', typ: '' },
            { json: 'preferredUsername', js: 'preferredUsername', typ: '' },
            { json: 'thumbnailUrl', js: 'thumbnailUrl', typ: '' },
            { json: 'photos', js: 'photos', typ: a(r('Photo')) },
            { json: 'profileBackground', js: 'profileBackground', typ: r('ProfileBackground') },
            { json: 'name', js: 'name', typ: r('Name') },
            { json: 'displayName', js: 'displayName', typ: '' },
            { json: 'aboutMe', js: 'aboutMe', typ: '' },
            { json: 'emails', js: 'emails', typ: a(r('Email')) },
            { json: 'accounts', js: 'accounts', typ: a(r('Account')) },
            { json: 'urls', js: 'urls', typ: a(r('URL')) },
        ], false),
        Account: o([
            { json: 'domain', js: 'domain', typ: '' },
            { json: 'display', js: 'display', typ: '' },
            { json: 'url', js: 'url', typ: '' },
            { json: 'username', js: 'username', typ: '' },
            { json: 'verified', js: 'verified', typ: '' },
            { json: 'shortname', js: 'shortname', typ: '' },
        ], false),
        Email: o([
            { json: 'primary', js: 'primary', typ: '' },
            { json: 'value', js: 'value', typ: '' },
        ], false),
        Name: o([
            { json: 'givenName', js: 'givenName', typ: '' },
            { json: 'familyName', js: 'familyName', typ: '' },
            { json: 'formatted', js: 'formatted', typ: '' },
        ], false),
        Photo: o([
            { json: 'value', js: 'value', typ: '' },
            { json: 'type', js: 'type', typ: u(undefined, '') },
        ], false),
        ProfileBackground: o([
            { json: 'color', js: 'color', typ: '' },
        ], false),
        URL: o([
            { json: 'value', js: 'value', typ: '' },
            { json: 'title', js: 'title', typ: '' },
        ], false),
    };
}
