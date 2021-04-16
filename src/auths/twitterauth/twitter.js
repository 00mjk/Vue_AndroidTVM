import QueryString from './querystring';
import twiter_store from "./store";

import Codebird from './codebird';

var twitter = {};
var cb = new Codebird;
twitter.cb = cb;
cb.setProxy("https://coderwebtech.com/codebird-cors-proxy/");

// ADD YOUR KEYS HERE! If you have none, go to https://apps.twitter.com and generate them!
cb.setConsumerKey("XpIvxPsGknYOk8N8RZnKxq7hc", "cyAoh4cYBk33Rn0Ixeho1qv76XmYJN3LX3W2qLQla266FiKF0e");

var oauth_token = QueryString.oauth_token;
var oauth_verifier = QueryString.oauth_verifier;
// sessionStorage.clear();

function saveTokens(oauth_token, oauth_token_secret) {
    sessionStorage.setItem('oauth_token', oauth_token);
    sessionStorage.setItem('oauth_token_secret', oauth_token_secret);
}

if (oauth_token && oauth_verifier) {
    cb.setToken(sessionStorage.getItem('oauth_token'), sessionStorage.getItem('oauth_token_secret'));

    cb.__call(
        "oauth_accessToken",
        {
            oauth_verifier: oauth_verifier
        },
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
                window.f7.loginScreen();
            }
            else if (reply) {
                console.log("oauth_accessToken: " + reply);
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                saveTokens(reply.oauth_token, reply.oauth_token_secret);
                // location.href = "/";
            }
        }
    );
}
else {
    
    if (!sessionStorage.getItem('oauth_token') || !sessionStorage.getItem('oauth_token_secret')) {
        document.addEventListener('DOMContentLoaded', () => { window.f7.loginScreen(); });
    }
    else {
        cb.setToken(sessionStorage.getItem('oauth_token'), sessionStorage.getItem('oauth_token_secret'));
        // cb.__call(
        //     "statuses_homeTimeline",
        //     {},
        //     function (reply, rate, err) {
        //         store.tweets.length = 0;
        //         store.tweets.push(...reply);
        //     }
        // );
    }
}

twitter.login = function () {
    cb.__call(
        "oauth_requestToken",
        { oauth_callback: "http://localhost:8081/twitter/callback" },
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
            }
            if (reply) {
                console.log("reply.oauth_token" + reply.oauth_token);
                console.log("reply.oauth_token_secret" + reply.oauth_token_secret);
                cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                saveTokens(reply.oauth_token, reply.oauth_token_secret);

                cb.__call(
                    "oauth_authorize",
                    {},
                    function (auth_url) {
                        location.href = auth_url;
                    }
                );
            }
        }
    );
}

twitter.home_timeline = function (data) {
    cb.__call(
        "statuses/home_timeline",
        {},
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
            }
            if (reply) {
                twiter_store.tweets.length = 0;
                twiter_store.tweets.push(...reply);
            }
        }
    );
}

twitter.account_settings = function (data) {
    cb.__call(
        "account/settings",
        {},
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
            }
            if (reply) {
                console.log(reply);
                twiter_store.account_settings = reply;
            }
        }
    );
}

twitter.account_verify_credentials = function (data) {
  return new Promise(function(resolve, reject) {
    cb.__call(
        "account/verify_credentials",
        {},
        function (reply, rate, err) {
            if (err) {
                console.log("error response or timeout exceeded" + err.error);
                reject(err);
            }
            if (reply) {
                twiter_store.account_verify_credentials = reply;
                resolve(reply);
            }
        }
    );
  });
}

twitter.logout = function () {
  sessionStorage.removeItem('oauth_verifier');
  let visited_list = sessionStorage.getItem("visited_list") + " ";
  let araray_visit = visited_list.split(" ");
  let session_visit = "";
  araray_visit.forEach((array) => {
    if (array != "twitter") session_visit += " " + array;
  });
  sessionStorage.removeItem("visited_list");
  sessionStorage.setItem("visited_list", session_visit);
  twiter_store.account_verify_credentials = null;
  twiter_store.tweets.length = 0;
}

export default twitter;
