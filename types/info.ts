// src/types/info.ts

export interface ContactoItem {
  texto: string;
  icono: string;
}

export interface Horarios {
  semana: string;
  domingo: string;
}

export interface Registro {
  texto: string;
  icono: string;
}

export interface Mapa {
  src: string;
  titulo: string;
}

export interface RedSocial {
  nombre: string;
  icono: string;
  url: string;
}

export interface Info {
  contacto: {
    direccion: ContactoItem;
    telefono: ContactoItem;
    email: ContactoItem;
    registro: Registro;
  };
  horarios: Horarios;
  mapa: Mapa;
  redes: RedSocial[];
}