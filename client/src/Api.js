const axios = require ('axios').default;
const apiUrl = 'http://localhost:5000/api/v1';
const adminUrl = 'http://localhost:5000/admin';

export const fetchUser = (id) => {
    console.log('Fetching User...');
    return axios
        .get(apiUrl + '/usuario/' + id);
};

export const postUser = (userId) => {
    console.log('Inserting User...');
    return axios
        .post(adminUrl + '/usuario', {id: userId, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const updateUser = (userId, region) => {
    console.log('Updating User...');
    return axios
        .post(adminUrl + '/update/usuario', {id: userId, region: region, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const deleteUser = (userId) => {
    console.log('Deleting User...');
    return axios
        .delete(adminUrl + '/usuario/' + userId);
};

export const fetchUsers = () => {
    console.log('Fetching Users...');
    return axios
        .get(apiUrl + '/usuario')
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchUserBadges = (id) => {
    console.log('Fetching User Badges...');
    return axios
        .get(apiUrl + '/usuariobadges/' + id)
};

export const fetchUserTorneos = (id) => {
    console.log('Fetching User Torneos...');
    return axios
        .get(apiUrl + '/usuariotorneos/' + id)
};

export const fetchUserPerifericos = (id) => {
    console.log('Fetching User Torneos...');
    return axios
        .get(apiUrl + '/usuarioperifericos/' + id);
};

export const fetchTorneo = (id) => {
    console.log('Fetching Torneo...');
    return axios
        .get(apiUrl + '/torneo/' + id)
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchTorneos = () => {
    console.log('Fetching Torneos...');
    return axios
        .get(apiUrl + '/torneo')
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const postTorneo = (nombre, rank, prize, formato) => {
    console.log('Inserting Torneo...');
    return axios
        .post(adminUrl + '/torneo', {nombre: nombre, rank: rank, prize: prize, formato: formato, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const deleteTorneo = (id) => {
    console.log('Deleting Torneo...');
    return axios
        .delete(adminUrl + '/torneo/' + id);
};

export const updateTorneo = (id, nombre, rank, prize, formato) => {
    console.log('Updating Torneo...');
    return axios
        .put(adminUrl + '/torneo/' + id, {nombre: nombre, rank: rank, prize: prize, formato: formato, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchPeriferico = (id) => {
    console.log('Fetching Periferico...');
    return axios
        .get(apiUrl + '/periferico/' + id);
};

export const postPeriferico = (marca, modelo, tipo) => {
    console.log('Inserting Periferico...');
    return axios
        .post(adminUrl + '/periferico', {marca: marca, modelo: modelo, tipo: tipo, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const deletePeriferico = (id) => {
    console.log('Deleting Periferico...');
    return axios
        .delete(adminUrl + '/periferico/' + id);
};

export const updatePeriferico = (id, marca, modelo, tipo) => {
    console.log('Updating Periferico...');
    return axios
        .put(adminUrl + '/periferico/' + id, {marca: marca, modelo: modelo, tipo: tipo, headers: { Accept : 'application/json'}})
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchPerifericos = () => {
    console.log('Fetching Periferico...');
    return axios
        .get(apiUrl + '/periferico')
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchBadge = (id) => {
    console.log('Fetching Badge...');
    return axios
        .get(apiUrl + '/badge/' + id)
        .then(res => res.data)
        .catch(err => console.error(err.message));
};

export const fetchBadges = () => {
    console.log('Fetching Badges...');
    return axios
        .get(apiUrl + '/badge')
        .then(res => res.data)
        .catch(err => console.error(err.message));
};