import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tapped = false;
  public state = {
    manaPool: 0,

    totalCoffers: [],
    tappedCoffers: 0,

    totalSwamp: [],
    tappedSwamp: 0,
    untappedSwamp: 0,

    isCoffersSwamp: false
  }

  public card = {
    tapped: false
  }

  ngOnInit(): void { }

  public counter(i: number) {
    return new Array(i);
  }

  public setCoffers(event): void {
    this.state.isCoffersSwamp = event.checked;
  }
  public processTappedCoffers(direction: number): void {
    direction === 1 ? this.state.tappedCoffers += 1 : this.state.tappedCoffers -= 1;
  }
  public processSwamp(direction: number): void {
    direction === 1 ? this.state.totalSwamp.push({ ...this.card }) : this.state.totalSwamp.pop();
  }
  public processCoffers(direction: number): void {
    direction === 1 ? this.state.totalCoffers.push({ ...this.card }) : this.state.totalCoffers.pop();
  }

  public calculate(): void {

    if (!this.state.totalSwamp) {
      return;
    }


    // const tappedCoffers = this.state.tappedCoffers;
    const tappedCoffers = 1;
    const isCoffersSwamp = this.state.isCoffersSwamp;

    const coffersCost = isCoffersSwamp ? 3 : 2;
    const totalSwamp = isCoffersSwamp ? this.state.totalSwamp.length + this.state.totalCoffers.length : this.state.totalSwamp.length;

    let manaPool = 0;
    for (let i = 0; i < tappedCoffers; i++) {
      manaPool += totalSwamp;
    }

    this.state.isCoffersSwamp = isCoffersSwamp;
    this.state.totalCoffers = this.state.totalCoffers;

    // 3 swamp
    // 2 coffers
    // tap 2 swamp + 1 coffer = +3 in mana pool
    // 1 swamp available
    // 1 swamp + -1 mana in pool + 1 coffer = +3 in mana pool [+2 in current mana pool]


    this.state.tappedSwamp = (tappedCoffers * coffersCost);

    let i = 0;
    for (let swamp of this.state.totalSwamp) {
      if (!swamp.tapped && i < this.state.tappedSwamp) {
        swamp.tapped = true;
        i++;
      }
    }
    // for (let i = 0; i < this.state.tappedSwamp; i++) {
    //   this.state.totalSwamp[i].tapped = true;
    // }
    this.state.untappedSwamp = (totalSwamp - (tappedCoffers * coffersCost));
    this.state.manaPool += manaPool;
  }

  public reset(): void {
    this.state = {
      manaPool: 0,
      totalCoffers: [],
      tappedCoffers: 0,
      totalSwamp: [],
      tappedSwamp: 0,
      untappedSwamp: 0,
      isCoffersSwamp: false
    }
  }
}
