import axios from 'axios'

const lokeAPI = axios.create({
    baseURL: 'http://159.65.88.14/api/loke',
    params: {
        projectId: 'arim-2021', // Ath, þesssu þarftu að breyta í það projectId sem þú villt nota.
        
    }
})

//#region Criminals
export default {
    // Sækir lista af öllum glæpamönnum
    getCriminals() {
        return lokeAPI.get('/criminals');
    },
    // Sækir eitt stak af glæpamanni eftir id
    getCriminalById(id) {
        return lokeAPI.get(`criminals/${id}`);
    },
    // Sendir inn og vistar einn glæpamann
    postCriminal(criminal) {
        return lokeAPI.post('/criminals', criminal);
    },
    // Sendir inn eintak af glæpamanni reynir að flétta honum upp eftir id og breyta gögnum sem á við
    putCriminal(criminal) {
        return lokeAPI.put('/criminals', criminal);
    },
    // Sendir inn del skipun á id fyrir glæpamann, sem þýðir að þetta fléttir upp glæmanni eftir id ef APIinn finnur id-ið þá eyðir hann glæpamanninum.
    delCriminal(id) {
        return lokeAPI.delete(`/criminals/${id}`);
    },
    getNotes() {
        return lokeAPI.get('/notes');
    },
    // Sækir eitt 
    getNotesById(id) {
        return lokeAPI.get(`notes/${id}`);
    },
    // Sendir 
    postNote(note) {
        return lokeAPI.post('/notes', note);
    },
    // Sendir 
    putNote(note) {
        return lokeAPI.put('/notes', note);
    },
    // Sendir i
    delNote(id) {
        return lokeAPI.delete(`/notes/${id}`);
    },
    getCrimes() {
        return lokeAPI.get('/crimes');
    },
    putCrime(crime) {
        return lokeAPI.put('/crimes', crime);
    },
    getCrimeById(id) {
        return lokeAPI.get(`/crimes/${id}`)
    },
    postCrime(crime) {
        return lokeAPI.post('/crimes', crime)
    },
    delCrime(id) {
        return lokeAPI.delete(`/crimes/${id}`);
    },
    getSuspects() {
        return lokeAPI.get('/suspects');
    },
    // Sækir eitt 
    getSuspect(id) {
        return lokeAPI.get(`suspects/${id}`);
    },
    // Sendir 
    postSuspect(s) {
        return lokeAPI.post('/suspects', s);
    },
    // Sendir 
    putSuspect(s) {
        return lokeAPI.put('/suspects', s);
    },
    // Sendir i
    delSuspect(id) {
        return lokeAPI.delete(`/suspects/${id}`);
    },
    getVictims() {
       
        
    return lokeAPI.get('/victims');
    },
    // Sækir eitt 
    getVictim(id) {
        return lokeAPI.get(`victims/${id}`);
    },
    // Sendir 
    postVictim(victim) {
        return lokeAPI.post('/victims', victim);
    },
    // Sendir 
    putVictim(victim) {
        return lokeAPI.put('/victims', victim);
    },
    // Sendir i
    delVictim(id) {
        return lokeAPI.delete(`/victims/${id}`);
    },
    postPhoto(formData) {
        return lokeAPI.post('upload', formData);
    },
    postPicture(formData) {
        return lokeAPI.post('upload', formData);
    },
    getTasks() {
        return lokeAPI.get('/tasks');
    },
    // Sækir eitt stak af glæpamanni eftir id
    getTaskById(id) {
        return lokeAPI.get(`tasks/${id}`);
    },
    // Sendir inn og vistar einn glæpamann
    postTask(task) {
        return lokeAPI.post('/tasks', task);
    },
    // Sendir inn eintak af glæpamanni reynir að flétta honum upp eftir id og breyta gögnum sem á við
    putTask(task) {
        return lokeAPI.put('/tasks', task);
    },
    // Sendir inn del skipun á id fyrir glæpamann, sem þýðir að þetta fléttir upp glæmanni eftir id ef APIinn finnur id-ið þá eyðir hann glæpamanninum.
    delTask(id) {
        return lokeAPI.delete(`/tasks/${id}`);
    },
    getUsers() {
        return lokeAPI.get('/users');
    },
    // Sækir eitt 
    getUserById(id) {
        return lokeAPI.get(`/users/${id}`);
    },
    // Sendir 
    postUser(user) {
        return lokeAPI.post('/users', user);
    },
    // Sendir 
    putUser(user) {
        return lokeAPI.put('/users', user);
    },
    // Sendir i
    delUser(id) {
        console.log('dlet user', id)
        return lokeAPI.delete(`/users/${id}`);
    },
    getReports() {
        return lokeAPI.get('/reports');
    },
    // Sækir eitt stak af glæpamanni eftir id
    getReportById(id) {
        return lokeAPI.get(`reports/${id}`);
    },
    // Sendir inn og vistar einn glæpamann
    postReport(report) {
        return lokeAPI.post('/reports', report);
    },
    // Sendir inn eintak af glæpamanni reynir að flétta honum upp eftir id og breyta gögnum sem á við
    putReport(report) {
        return lokeAPI.put('/reports', report);
    },
    // Sendir inn del skipun á id fyrir glæpamann, sem þýðir að þetta fléttir upp glæmanni eftir id ef APIinn finnur id-ið þá eyðir hann glæpamanninum.
    delReport(id) {
        return lokeAPI.delete(`/reports/${id}`);
    }

    
}
