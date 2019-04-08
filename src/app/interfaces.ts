export interface TokenPayload {
	email: string;
	password: string;
	name?: string;
}

export interface TokenResponse {
	token: string;
}

export interface UserDetails {
	id: string;
	email: string;
	name: string;
	exp: number;
	iat: number;
}
export interface Content {
	id?: number;
	title?: string;
	body?: string;
	lead?: string;
	author?: number;
	slug?: string;
	category?: any;
	category_id?: number;
	featured_img?: number;
	inline_img?: number;
	inline_caption?: string;
	related?:any[];
	tags?: string[];
	status?: number;
	documents?: any[];
	sidebars?: any[];
	toggles?: any[];
	gallery?: number[];
	event_start?: string;
	event_end?: string;
	venue?: string;
	add?: string;
	city?: string;
	county?: string;
	postcode?: string;
	created_at?: any;
	updated_at?: any;	
	person?: any;
}

export interface Category {
	id?: string;
	name: string;
}

export interface Tag {
	id?: string;
	name: string;
	parent: number;
	slug: string;
}