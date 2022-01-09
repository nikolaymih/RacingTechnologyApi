export default {
    port: 5000,
    origin: 'http://localhost:3000',
    dbUri: 'mongodb://localhost:27017/RacingTechnology',
    saltRounds: 12,
    accessTokenExpiration: '15m',
    refreshTokenExpiration: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFQnnhM/Tt3iOrS2r1dTSNs4Mi7B
e06OVagO903ltJYqp1gu8ccCXVIk1C6tG43FZMINzX3gVx4+IyM2yo8Ia4EFL2L8
iBW4rMzwWkNNS2jmGMStm5joHBtH5TcO2CV3BbKuzOwMITpf60Bqi19MurEfSCno
xoyYumW7AGxUnjKPAgMBAAE=
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgFQnnhM/Tt3iOrS2r1dTSNs4Mi7Be06OVagO903ltJYqp1gu8ccC
XVIk1C6tG43FZMINzX3gVx4+IyM2yo8Ia4EFL2L8iBW4rMzwWkNNS2jmGMStm5jo
HBtH5TcO2CV3BbKuzOwMITpf60Bqi19MurEfSCnoxoyYumW7AGxUnjKPAgMBAAEC
gYAgQD6Yab6z0itlbk2sTcKyIMs6l/PFm07AZVvpgoq+sgIIDZWjCwjwniSi7ryM
jIWcyOVjxEIe2PlmWW0ve66XBfP3swqQSLbMTQspbC5FIou34xrk9R/tqfVPU+G/
9Hu/Ntxy6/ENFhSdyJ3zwEEl5yVCGCZ5c6ULHlb3GPQdQQJBAKhEEFquoy+CGT4l
kzg6DwZCB7g8OWzAnl2DoG36QZOP/VDlvD9vwYMSmxv8Po4zORcLKFGD6HDnGFw5
nPiabhcCQQCACH9zD+yR+49+RO4kZpbmZOwFH1y1ka9J/86NxmhpZR4peah6LGK7
pDdA/C+k1ZrEE/pmnWvpN30egCO3EGJJAkEAkIt3qQ6gLC2MVbCdmQ123p9WVlOV
2PBWmmp6JD94mbR1nUrcvXnZOCmBiTbU3f7uqfbxuaSgxmwepwru5zhyHQJAIWOV
8SjO9gcXlcNeI2oJok3haziRkdxLTU4DzN9YLVwscH6EnE/k87BQpIbf2enGsanQ
HGCjWq+Y1pJuPfhs2QJAWQ5PDvAY/lT/wu8kFXlyRY+/mRJj3UFpqfC+IObEDt4A
CSCPnWy+gp6LaROdxfTJAuFOa8pB8XjWK6pqYxvSmw==
-----END RSA PRIVATE KEY-----`,
    paymentSecretKey: 'sk_test_51KEfDkA14D7SLrkhSjAJ5rS1I286JYKB6HGg0RDUALuT0ul8xv5UfUIXRwAB7Hl48p2R5gip2R35NyiFdnc0GIzI008I7au7uo'
};

