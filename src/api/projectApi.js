import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getProjects() {
    return get('projects');
}

export function deleteProject(id) {
    return del(`projects/${id}`);
}

function get(urlEndpoint) {
    return fetch(baseUrl + urlEndpoint).then(onSuccess, onError);
}

function del(urlEndpoint) {
    const request = new Request(baseUrl + urlEndpoint, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(err) {
    console.log(err) // eslint-disable-line no-console
}