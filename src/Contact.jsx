import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import Menu from './components/Menu'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import style from './Contact.module.css'

import { useState } from "react"

export const Contact = () => {
    const geoData = ({ lat: -25.4249668, lng: -49.2748809 })

    const defaultPhoneNumber = "5541999999999"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
        const {name, email, message} = formData;

        const urlZapZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        E-mail:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`

        window.open(urlZapZap, '_blank')
    }
    return (

        <>
            <Menu />
            <div className={style.sectionContact}>
                <div>
                    <h2>Contato</h2>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" value={formData.message} cols="30" rows="10" onChange={handleChange} required></textarea>
                    </div>
                    <button onClick={handleZap}>Enviar mensagem</button>
                </div>
                <div>
                    <h2>Mapa</h2>
                    <div>
                        <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "700px" }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[geoData.lat, geoData.lng]}>
                                <Popup>
                                    R. Paula Gomes, 282 - São Francisco<br />Curitiba - PR, 80510-070
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>

            </div>
        </>
    )
}