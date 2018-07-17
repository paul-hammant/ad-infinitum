This demo can only run on localhost, because the script relies on *.devd.io (which always resolves to 127.0.0.1).

https://docs.python.org/2/library/simplehttpserver.html is a way of doing that but there are others.

I'm imperfectly simulating a number of advertising-service domains, that would be involved in placing ads in a page.
Not just ads, but any content in a page from a third party. Or fourth of fifth party, etc.  This is imperfect because of the
reliance on devd.io's dynamic DNS service. In real life, advertising partners are these -
https://pgl.yoyo.org/as/serverlist.php - and more (not sub-domains of devd.io).

Browser makers could quite easily add new settings to allow end-users more control. The setting could be "Limit to 'N' the
recursion depth of thirty-party JavaScript: [N]". Or perhaps "Allow third-party JavaScript: [yes/no]".

This doesn't eliminate malvertising, but the likes of Google (re ad content) would make tech that content makers using
AdWords would deploy into their stack, but it would likely force content makers to check the payloads of advert content
(or not) and prevent end-users from being hacked (or not) and be able to easily dismiss law-suits (or not). Or each
partner down the chain to indemnify the prior partner up the chain (written into contracts).

Here it is running in a browser:

![malvertizing](https://user-images.githubusercontent.com/82182/42846977-65456ea6-8a12-11e8-9f51-94fde1de8298.gif)

Each of those colored lines being appended is a different domain injecting it pseudo-ad content.  In real life, only a
few ads inject into your page, but hundreds of domains may be involved in a decision whether to place one, or not, or
delegate to another ad partner for a similar decision.

The murky malvertising entities within this chain are picky as to who they target. Read here - https://www.proofpoint.com/us/threat-insight/post/massive-adgholas-malvertising-campaigns-use-steganography-and-file-whitelisting-to-hide-in-plain-sight

