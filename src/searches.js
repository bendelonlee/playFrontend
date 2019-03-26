import { artistSearchRequest } from './requests.js';
import { artistSearchRenderer } from './renderers.js';

export class ArtistSearch {
  constructor(artist) {
    this.artist = artist;
    this.request = artistSearchRequest
    this.renderer = artistSearchRenderer
  }
  fetch_and_render() {
    return this.request(this.artist, this.renderer);
  }
}
