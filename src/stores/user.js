import { writable } from 'svelte/store';

// Инициализация Store с данными из localStorage
const initialUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null;
const initialAccessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || null : null;
const initialRefreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') || null : null;

export const user = writable(initialUser);
export const accessToken = writable(initialAccessToken);
export const refreshToken = writable(initialRefreshToken);

// Сохранение данных в localStorage при обновлении Store
user.subscribe(value => {
	if (typeof window !== 'undefined') {
		if (value) {
			localStorage.setItem('user', JSON.stringify(value));
		} else {
			localStorage.removeItem('user');
		}
	}
});

accessToken.subscribe(value => {
	if (typeof window !== 'undefined') {
		if (value) {
			localStorage.setItem('accessToken', value);
		} else {
			localStorage.removeItem('accessToken');
		}
	}
});

refreshToken.subscribe(value => {
	if (typeof window !== 'undefined') {
		if (value) {
			localStorage.setItem('refreshToken', value);
		} else {
			localStorage.removeItem('refreshToken');
		}
	}
});

export function logout() {
	user.set(null);
	accessToken.set(null);
	refreshToken.set(null);
	if (typeof window !== 'undefined') {
		localStorage.removeItem('user');
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
	}
}