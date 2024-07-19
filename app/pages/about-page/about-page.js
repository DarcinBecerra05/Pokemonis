import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default';
import '@cells-demo/demo-app-container/demo-app-container.js';

class ContactPage extends CellsPage {

  static get is() {
    return 'contact-page';
  }

  static get properties() {
    return {
      description: { type: String },
      fullname: { type: Number },
      profile: { type: String },
      title: { type: String}
    };
  }

  constructor() {
    super();
    this.description = '¡Bienvenidos a nuestra página de Pokemones! Explora y disfruta de todo sobre tus Pokemones favoritos. Únete a nuestra comunidad y conoce de los mejores ¡Atrápalos a todos y conviértete en un verdadero maestro Pokémon!';
    this.title = 'Acerca de la App y de mí';
    this.profile = 'Actualmente soy Tecnologa en analisis y desarrollo de software, titulada como tecnica en sistemas y Bachiller con especializacion es sistemas. Por otro lado,he venido desarrollando habilidades importantes como la comunicación efectiva y el trabajo en equipo. Esto me ha permitido establecer relaciones sólidas y colaborativas. Además, gestiono mi tiempo con eficiencia y resuelvo problemas de manera creativa, lo que me ayuda a superar desafíos y agregar valor en todos los proyectos. Soy conocido por adaptarme rápidamente a nuevas situaciones y por mi deseo constante de aprender, lo que impulsa mi desarrollo tanto personal como profesional.';
    this.fullname = 'Darcin Becerra';
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app-main-content">
            <h3>${this.title}</h3>  
            <p> ${this.description}</p> 
            <br>
            <h4>${this.fullname}</h4> 
            <p> ${this.profile}</p>  
            <p></p> 
            <bbva-button-default active=""  @click=${this.gotoHome}>
                Back To Home
            </bbva-button-default>              
        </div>
      </demo-app-template>`;
  }

  gotoHome() {
    this.navigate('home');
  }

}
window.customElements.define(ContactPage.is, ContactPage);
