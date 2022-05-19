import { Component, BaseComponent, Global, Handle, Intents } from '@jovotech/framework';
import { NlpjsNlu } from '@jovotech/nlu-nlpjs';

@Global()
@Component()
export class EchoComponent extends BaseComponent {
  START() {
    return this.welcome();
  }

  welcome() {
    let message = this.$t('welcome') == '' ? 'nothing to welcome' : this.$t('welcome')
    return this.$send({ message: message });
  }

  @Handle({ intents: ['matchAny'], prioritizedOverUnhandled: true })
  async handleAny() {
    
    // context
    let utterance = this.$input.getText();
    
    let history = this.$history
    let input = this.$input
    
    // let entities = this.$plugins.NlpjsNlu.processText(utterance);
    // let nlu = await this.$plugins.CorePlatform.plugins.NlpjsNlu.processText(this, utterance);

    let request = this.$request
    // let ents = this.$entities.value
    // let entModel = this.$entities.model;
    // let entCommand = this.$entities.command;
    // let entProjectName = this.$entities.project_name;


    // if (this.$entities.model) {
    //   this.$component.data.model = this.$entities.model.resolved;
    // }
    // context.analyseTurn(utterance); // this sets the this.$user.conver

    
    let message = utterance;
    return this.$send({ message: message });
    
  }
  onEnter() {
    let message = "on enter"
    return this.$send({ message: preSSML + message + postSSML });
  }
  noMatch() {
    let message = "no Match"
    return this.$send({ message: message });
  }

  noMatch1() {
    let message = "no Match 1"
    return this.$send({ message: message });
  }
  noMatch2() {
    let message = "no Match 2"
    return this.$send({ message: message });
  }
  noMatch3() {
    let message = "no Match 3"
    return this.$send({ message: message });
  }
  noInput() {
    let message = "no Input"
    return this.$send({ message: message });
  }
  noInput1() {
    let message = "no Input 1"
    return this.$send({ message: message });
  }
  noInput2() {
    let message = "no Input 2"
    return this.$send({ message: message });
  }
  noInput3() {
    let message = "no Input 3"
    return this.$send({ message: message });
  }
  cancel() {
    let message = "cancel"
    return this.$send({ message: message });
  }
  UNHANDLED() {
    return this.handleAny()
    let message = "unhandled"
    return this.$send({ message: message });
  }
}
