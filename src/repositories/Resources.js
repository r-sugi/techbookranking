import { Response } from './Response'
export class Resources {
  constructor({ requestfn }) {
    this._requestfn = requestfn
  }

  async exec() {
    const res = await this._requestfn()
      .then(res => res)
      .catch(err => err.response)
    return this._buildResponse(res)
  }

  _buildResponse(response) {
    return new Response(response)
  }
}
