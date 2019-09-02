export class Response {
  constructor(response) {
    this._expectStatus = 200
    this._buildResponse(response)
    return this
  }

  // set explicitly
  expectStatus(expectStatus) {
    this._expectStatus = expectStatus
    return this
  }

  isError() {
    return this.status !== this._expectStatus
  }

  // pass all property
  _buildResponse(response) {
    Object.assign(this, response)
  }
}
