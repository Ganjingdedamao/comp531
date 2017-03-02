import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

describe('Test Dummy Server Example Page', () => {

    const preamble = 'you are logged in as'

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    it('should log in as the test user', (done) => {
        sleep(500)
            .then(findId('message').getText()
                .then(text => {
                    expect(text.indexOf(preamble)).to.equal(0)
                })
                .then(done))
    })

    it("Update the headline and verify the change", (done) => {
        // IMPLEMENT ME
        // find the headline input
        // .sendKeys(new headline message)
        // verify the headline is updated
        // .sendKeys(the old headline message)
        // verify the headline is updated
        var oldHeadline = 'old headline message'
        var newHeadline = 'new headline message'
        var username = common.creds.username;
        var prefix = `you are logged in as ${username} `
        sleep(500)
            .then(findId('newHeadline').sendKeys(newHeadline))
            .then(findId('headline').click())
            .then(sleep(1000))
            
            .then(findId('message').getText()
                .then(text => {
                    expect(text.substring(text.indexOf('"'))).to.equal('"' + newHeadline + '"')
                    
                }))
            .then(findId('newHeadline').sendKeys(oldHeadline))
            .then(findId('headline').click())
            .then(sleep(1000))
            .then(findId('message').getText()
                .then(text => {
                    expect(text.substring(text.indexOf('"'))).to.equal('"' + oldHeadline + '"')
                   
                }))
        done()
        
        
    })

    after('should log out', (done) => {
        common.logout().then(done)
    })
})
