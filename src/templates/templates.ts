import { ITemplate, ITemplateEmailWait, ITemplateOffer } from '../interfaces'

export const template_create_admin = (vars: ITemplate) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml"
lang="en" xml:lang="en" style="min-height: 100%; background-color: #fff;" xml:lang="en">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="telephone=no" />
    <title>Welcome to Taylor Stitch Mens</title>
    <style>
      @media only screen and (max-width:720px) {
        .small-float-center {
          margin: 0 auto !important; float: none !important; text-align: center !important;
        }
        .small-text-center {
          text-align: center !important;
        }
        .small-text-left {
          text-align: left !important;
        }
        .small-text-right {
          text-align: right !important;
        }
        .hide-for-large {
          display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
        }
        table.body table.container .hide-for-large {
          display: table !important; width: 100% !important;
        }
        table.body table.container .row.hide-for-large {
          display: table !important; width: 100% !important;
        }
        table.body table.container .callout-inner.hide-for-large {
          display: table-cell !important; width: 100% !important;
        }
        table.body table.container .show-for-large {
          display: none !important; width: 0; mso-hide: all; overflow: hidden;
        }
        table.body img {
          width: auto; height: auto;
        }
        table.body center {
          min-width: 0 !important;
        }
        table.body .container {
          width: 100% !important;
        }
        table.body .column {
          height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
        }
        table.body .columns {
          height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
        }
        table.body .column .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .column .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .columns .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .columns .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .collapse .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .collapse .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        td.small-1 {
          display: inline-block !important; width: 8.33333% !important;
        }
        th.small-1 {
          display: inline-block !important; width: 8.33333% !important;
        }
        td.small-2 {
          display: inline-block !important; width: 16.66667% !important;
        }
        th.small-2 {
          display: inline-block !important; width: 16.66667% !important;
        }
        td.small-3 {
          display: inline-block !important; width: 25% !important;
        }
        th.small-3 {
          display: inline-block !important; width: 25% !important;
        }
        td.small-4 {
          display: inline-block !important; width: 33.33333% !important;
        }
        th.small-4 {
          display: inline-block !important; width: 33.33333% !important;
        }
        td.small-5 {
          display: inline-block !important; width: 41.66667% !important;
        }
        th.small-5 {
          display: inline-block !important; width: 41.66667% !important;
        }
        td.small-6 {
          display: inline-block !important; width: 50% !important;
        }
        th.small-6 {
          display: inline-block !important; width: 50% !important;
        }
        td.small-7 {
          display: inline-block !important; width: 58.33333% !important;
        }
        th.small-7 {
          display: inline-block !important; width: 58.33333% !important;
        }
        td.small-8 {
          display: inline-block !important; width: 66.66667% !important;
        }
        th.small-8 {
          display: inline-block !important; width: 66.66667% !important;
        }
        td.small-9 {
          display: inline-block !important; width: 75% !important;
        }
        th.small-9 {
          display: inline-block !important; width: 75% !important;
        }
        td.small-10 {
          display: inline-block !important; width: 83.33333% !important;
        }
        th.small-10 {
          display: inline-block !important; width: 83.33333% !important;
        }
        td.small-11 {
          display: inline-block !important; width: 91.66667% !important;
        }
        th.small-11 {
          display: inline-block !important; width: 91.66667% !important;
        }
        td.small-12 {
          display: inline-block !important; width: 100% !important;
        }
        th.small-12 {
          display: inline-block !important; width: 100% !important;
        }
        .column td.small-12 {
          display: block !important; width: 100% !important;
        }
        .column th.small-12 {
          display: block !important; width: 100% !important;
        }
        .columns td.small-12 {
          display: block !important; width: 100% !important;
        }
        .columns th.small-12 {
          display: block !important; width: 100% !important;
        }
        table.body td.small-offset-1 {
          margin-left: 8.33333% !important;
        }
        table.body th.small-offset-1 {
          margin-left: 8.33333% !important;
        }
        table.body td.small-offset-2 {
          margin-left: 16.66667% !important;
        }
        table.body th.small-offset-2 {
          margin-left: 16.66667% !important;
        }
        table.body td.small-offset-3 {
          margin-left: 25% !important;
        }
        table.body th.small-offset-3 {
          margin-left: 25% !important;
        }
        table.body td.small-offset-4 {
          margin-left: 33.33333% !important;
        }
        table.body th.small-offset-4 {
          margin-left: 33.33333% !important;
        }
        table.body td.small-offset-5 {
          margin-left: 41.66667% !important;
        }
        table.body th.small-offset-5 {
          margin-left: 41.66667% !important;
        }
        table.body td.small-offset-6 {
          margin-left: 50% !important;
        }
        table.body th.small-offset-6 {
          margin-left: 50% !important;
        }
        table.body td.small-offset-7 {
          margin-left: 58.33333% !important;
        }
        table.body th.small-offset-7 {
          margin-left: 58.33333% !important;
        }
        table.body td.small-offset-8 {
          margin-left: 66.66667% !important;
        }
        table.body th.small-offset-8 {
          margin-left: 66.66667% !important;
        }
        table.body td.small-offset-9 {
          margin-left: 75% !important;
        }
        table.body th.small-offset-9 {
          margin-left: 75% !important;
        }
        table.body td.small-offset-10 {
          margin-left: 83.33333% !important;
        }
        table.body th.small-offset-10 {
          margin-left: 83.33333% !important;
        }
        table.body td.small-offset-11 {
          margin-left: 91.66667% !important;
        }
        table.body th.small-offset-11 {
          margin-left: 91.66667% !important;
        }
        table.body table.columns td.expander {
          display: none !important;
        }
        table.body table.columns th.expander {
          display: none !important;
        }
        table.body .right-text-pad {
          padding-left: 10px !important;
        }
        table.body .text-pad-right {
          padding-left: 10px !important;
        }
        table.body .left-text-pad {
          padding-right: 10px !important;
        }
        table.body .text-pad-left {
          padding-right: 10px !important;
        }
        table.menu {
          width: 100% !important;
        }
        table.menu td {
          width: auto !important; display: inline-block !important;
        }
        table.menu th {
          width: auto !important; display: inline-block !important;
        }
        table.menu.small-vertical td {
          display: block !important;
        }
        table.menu.small-vertical th {
          display: block !important;
        }
        table.menu.vertical td {
          display: block !important;
        }
        table.menu.vertical th {
          display: block !important;
        }
        table.menu[align=center] {
          width: auto !important;
        }
        table.button.small-expand {
          width: 100% !important;
        }
        table.button.small-expanded {
          width: 100% !important;
        }
        table.button.small-expand table {
          width: 100%;
        }
        table.button.small-expanded table {
          width: 100%;
        }
        table.button.small-expand table a {
          text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
        }
        table.button.small-expanded table a {
          text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
        }
        table.button.small-expand center {
          min-width: 0;
        }
        table.button.small-expanded center {
          min-width: 0;
        }
        .letter-spaced-max {
          letter-spacing: .3em !important; text-indent: 0 !important;
        }
        .hero h3 {
          margin: 0 !important; max-width: none !important;
        }
        .ways-to-shop {
          padding: 0 25px;
        }
        .wordmark img {
          margin: 0 20px !important;
        }
        .wordmark-overlay img {
          margin: 0 20px !important;
        }
        .footer td.column table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer td.columns table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer th.column table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer th.columns table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer td.column table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer td.columns table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer th.column table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer th.columns table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer .navigation .last {
          width: auto !important;
        }
        .overlay.hero h1 {
          font-size: 26px !important;
        }
        .overlay.hero h3 {
          font-size: 12px !important;
        }
      }
      @media screen and (min-device-width:1px) {
        a[href^="x-apple-data-detectors:"] {
          color: inherit !important; text-decoration: none !important;
        }
        a[href^=tel] {
          color: inherit !important; text-decoration: none !important;
        }
      }
    </style>
  </head>
  
  <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; box-sizing: border-box; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; min-width: 100%; text-align: left; width: 100% !important; margin: 0; padding: 0;">
<span class="preheader" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;">All the camaraderie, without the awkward political discussions</span>
    <table
    class="body" style="border-collapse: collapse; border-spacing: 0; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; height: 100%; line-height: 1.75em; text-align: left; vertical-align: top; width: 100%; margin: 0; padding: 0;"
    bgcolor="#fff">
      <tr style="vertical-align: top; padding: 0;" align="left">
        <td class="center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;">
          <table align="center" class="container" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 710px; margin: 0 auto; padding: 0 0 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <center data-parsed="" style="min-width: 640px; width: 100%;">
                                  <img src="${vars.url_log}"
                                  alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 22%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                  />
                                  <!-- <img src="${vars.banner}"
                                  alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                  /> -->
                                </center>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="10px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 10px; font-weight: 400; hyphens: auto; line-height: 10px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-1 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-10 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 563.33px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                              <h1 class="text-center serif small-text-left" style="text-align: center;color: #25368c; -webkit-hyphens: none; font-family: rubik; font-size: 35px; font-weight: bold; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                              align="center">Hola!</h1>

                                <h5 class="text-center serif small-text-left" style="text-align: center;-webkit-hyphens: none; color: inherit; font-family: rubik;
                                font-size: 25px; font-weight: 400; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                                align="center">Clan te da la bienvenida ${vars.names} este es tu primer paso de un gran cambio. <br> Tu nueva contraseña es :${vars.password}</h5>
                               
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-1 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-3 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-6 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="22px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 22px; font-weight: 400; hyphens: auto; line-height: 22px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p class="text-center small-text-left uppercase bold" style="-webkit-hyphens: none; color: #25368c; font-family: rubik;
                                font-size: 15px; font-weight: 700; hyphens: none; line-height: 1.75em; text-transform: uppercase; margin: 0; padding: 0;"
                                align="center">Haga click en "iniciar sesión".
                                 
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <center data-parsed="" style="min-width: 640px; width: 100%;">
                                  <table class="button float-center" style="border-collapse: collapse; border-spacing: 0; float: none; text-align: center; vertical-align: top; width: auto; margin: 0 0 10px; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <td style="background: #25368c;-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #fff; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0; "
                                            align="left"  valign="top">
                                              <a href="${vars.redirect_buttom}"
                                              style="border-radius: 0; color: #fff; display: inline-block; font-family: 'rubik'; font-size: 12px; font-weight: 600; letter-spacing: 1px; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 12px 36px; ">Iniciar Sesión</a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="border-top small-12 large-6 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; border-top-width: 1px; border-top-color: #c2c2c2; border-top-style: solid; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="40px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 40px; font-weight: 400; hyphens: auto; line-height: 40px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <table class="row navigation" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-6 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <p style="-webkit-hyphens: none; color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; hyphens: none; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <img alt="Responsibly Built For The Long Haul" class="responsibly-built" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-responsibly-built-lockup.png?4921729998722299888"
                                  style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: 190px;"
                                  />
                                </p>
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-6 large-3 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/collections/all-mens?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Shop</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/workshop?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Workshop</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/collections/mens-last-call?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Last Call</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/blogs/dispatches?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">The Dispatch</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-6 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/pages/about-us?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">About</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/account?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Account</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/help?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Help</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu social first" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                          align="left">
                                            <a href="https://www.instagram.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Instagram: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-instagram_13964307-5f03-4823-a56c-e3cf678e24c1.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.facebook.com/taylorstitchclothing" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Facebook: @taylorstitchclothing" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-facebook_8b79e338-a5d9-4c1e-a85f-8c006a3de733.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://twitter.com/taylorstitch" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Twitter: @TaylorStitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-twitter_004bd81c-a43e-4dff-8df4-eae827a2e956.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.pinterest.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Pinterest: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-pinterest.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="/taylorstitch/images/1" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="VSCO: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-vsco.png?12714427464042413048"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu admin small-vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                            style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">manage preferences <span class="show-for-large" style="padding-left: 20px;">|</span>
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                            style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">unsubscribe</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table> -->
        </td>
      </tr>
      </table>
      <!-- prevent Gmail on iOS font size manipulation -->
      <div style="display: none; white-space: nowrap; font: 15px courier;">                                                           </div>
  </body>

</html>
    `
}
export const template_create_rejected = (vars: ITemplate) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml"
lang="en" xml:lang="en" style="min-height: 100%; background-color: #fff;" xml:lang="en">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="telephone=no" />
    <title>Welcome to Taylor Stitch Mens</title>
    <style>
      @media only screen and (max-width:720px) {
        .small-float-center {
          margin: 0 auto !important; float: none !important; text-align: center !important;
        }
        .small-text-center {
          text-align: center !important;
        }
        .small-text-left {
          text-align: left !important;
        }
        .small-text-right {
          text-align: right !important;
        }
        .hide-for-large {
          display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
        }
        table.body table.container .hide-for-large {
          display: table !important; width: 100% !important;
        }
        table.body table.container .row.hide-for-large {
          display: table !important; width: 100% !important;
        }
        table.body table.container .callout-inner.hide-for-large {
          display: table-cell !important; width: 100% !important;
        }
        table.body table.container .show-for-large {
          display: none !important; width: 0; mso-hide: all; overflow: hidden;
        }
        table.body img {
          width: auto; height: auto;
        }
        table.body center {
          min-width: 0 !important;
        }
        table.body .container {
          width: 100% !important;
        }
        table.body .column {
          height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
        }
        table.body .columns {
          height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
        }
        table.body .column .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .column .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .columns .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .columns .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .collapse .column {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        table.body .collapse .columns {
          padding-left: 0 !important; padding-right: 0 !important;
        }
        td.small-1 {
          display: inline-block !important; width: 8.33333% !important;
        }
        th.small-1 {
          display: inline-block !important; width: 8.33333% !important;
        }
        td.small-2 {
          display: inline-block !important; width: 16.66667% !important;
        }
        th.small-2 {
          display: inline-block !important; width: 16.66667% !important;
        }
        td.small-3 {
          display: inline-block !important; width: 25% !important;
        }
        th.small-3 {
          display: inline-block !important; width: 25% !important;
        }
        td.small-4 {
          display: inline-block !important; width: 33.33333% !important;
        }
        th.small-4 {
          display: inline-block !important; width: 33.33333% !important;
        }
        td.small-5 {
          display: inline-block !important; width: 41.66667% !important;
        }
        th.small-5 {
          display: inline-block !important; width: 41.66667% !important;
        }
        td.small-6 {
          display: inline-block !important; width: 50% !important;
        }
        th.small-6 {
          display: inline-block !important; width: 50% !important;
        }
        td.small-7 {
          display: inline-block !important; width: 58.33333% !important;
        }
        th.small-7 {
          display: inline-block !important; width: 58.33333% !important;
        }
        td.small-8 {
          display: inline-block !important; width: 66.66667% !important;
        }
        th.small-8 {
          display: inline-block !important; width: 66.66667% !important;
        }
        td.small-9 {
          display: inline-block !important; width: 75% !important;
        }
        th.small-9 {
          display: inline-block !important; width: 75% !important;
        }
        td.small-10 {
          display: inline-block !important; width: 83.33333% !important;
        }
        th.small-10 {
          display: inline-block !important; width: 83.33333% !important;
        }
        td.small-11 {
          display: inline-block !important; width: 91.66667% !important;
        }
        th.small-11 {
          display: inline-block !important; width: 91.66667% !important;
        }
        td.small-12 {
          display: inline-block !important; width: 100% !important;
        }
        th.small-12 {
          display: inline-block !important; width: 100% !important;
        }
        .column td.small-12 {
          display: block !important; width: 100% !important;
        }
        .column th.small-12 {
          display: block !important; width: 100% !important;
        }
        .columns td.small-12 {
          display: block !important; width: 100% !important;
        }
        .columns th.small-12 {
          display: block !important; width: 100% !important;
        }
        table.body td.small-offset-1 {
          margin-left: 8.33333% !important;
        }
        table.body th.small-offset-1 {
          margin-left: 8.33333% !important;
        }
        table.body td.small-offset-2 {
          margin-left: 16.66667% !important;
        }
        table.body th.small-offset-2 {
          margin-left: 16.66667% !important;
        }
        table.body td.small-offset-3 {
          margin-left: 25% !important;
        }
        table.body th.small-offset-3 {
          margin-left: 25% !important;
        }
        table.body td.small-offset-4 {
          margin-left: 33.33333% !important;
        }
        table.body th.small-offset-4 {
          margin-left: 33.33333% !important;
        }
        table.body td.small-offset-5 {
          margin-left: 41.66667% !important;
        }
        table.body th.small-offset-5 {
          margin-left: 41.66667% !important;
        }
        table.body td.small-offset-6 {
          margin-left: 50% !important;
        }
        table.body th.small-offset-6 {
          margin-left: 50% !important;
        }
        table.body td.small-offset-7 {
          margin-left: 58.33333% !important;
        }
        table.body th.small-offset-7 {
          margin-left: 58.33333% !important;
        }
        table.body td.small-offset-8 {
          margin-left: 66.66667% !important;
        }
        table.body th.small-offset-8 {
          margin-left: 66.66667% !important;
        }
        table.body td.small-offset-9 {
          margin-left: 75% !important;
        }
        table.body th.small-offset-9 {
          margin-left: 75% !important;
        }
        table.body td.small-offset-10 {
          margin-left: 83.33333% !important;
        }
        table.body th.small-offset-10 {
          margin-left: 83.33333% !important;
        }
        table.body td.small-offset-11 {
          margin-left: 91.66667% !important;
        }
        table.body th.small-offset-11 {
          margin-left: 91.66667% !important;
        }
        table.body table.columns td.expander {
          display: none !important;
        }
        table.body table.columns th.expander {
          display: none !important;
        }
        table.body .right-text-pad {
          padding-left: 10px !important;
        }
        table.body .text-pad-right {
          padding-left: 10px !important;
        }
        table.body .left-text-pad {
          padding-right: 10px !important;
        }
        table.body .text-pad-left {
          padding-right: 10px !important;
        }
        table.menu {
          width: 100% !important;
        }
        table.menu td {
          width: auto !important; display: inline-block !important;
        }
        table.menu th {
          width: auto !important; display: inline-block !important;
        }
        table.menu.small-vertical td {
          display: block !important;
        }
        table.menu.small-vertical th {
          display: block !important;
        }
        table.menu.vertical td {
          display: block !important;
        }
        table.menu.vertical th {
          display: block !important;
        }
        table.menu[align=center] {
          width: auto !important;
        }
        table.button.small-expand {
          width: 100% !important;
        }
        table.button.small-expanded {
          width: 100% !important;
        }
        table.button.small-expand table {
          width: 100%;
        }
        table.button.small-expanded table {
          width: 100%;
        }
        table.button.small-expand table a {
          text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
        }
        table.button.small-expanded table a {
          text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
        }
        table.button.small-expand center {
          min-width: 0;
        }
        table.button.small-expanded center {
          min-width: 0;
        }
        .letter-spaced-max {
          letter-spacing: .3em !important; text-indent: 0 !important;
        }
        .hero h3 {
          margin: 0 !important; max-width: none !important;
        }
        .ways-to-shop {
          padding: 0 25px;
        }
        .wordmark img {
          margin: 0 20px !important;
        }
        .wordmark-overlay img {
          margin: 0 20px !important;
        }
        .footer td.column table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer td.columns table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer th.column table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer th.columns table.menu.vertical .menu-item {
          padding-left: 0 !important;
        }
        .footer td.column table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer td.columns table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer th.column table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer th.columns table.menu.admin .menu-item {
          padding: 0 !important;
        }
        .footer .navigation .last {
          width: auto !important;
        }
        .overlay.hero h1 {
          font-size: 26px !important;
        }
        .overlay.hero h3 {
          font-size: 12px !important;
        }
      }
      @media screen and (min-device-width:1px) {
        a[href^="x-apple-data-detectors:"] {
          color: inherit !important; text-decoration: none !important;
        }
        a[href^=tel] {
          color: inherit !important; text-decoration: none !important;
        }
      }
    </style>
  </head>
  
  <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; box-sizing: border-box; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; min-width: 100%; text-align: left; width: 100% !important; margin: 0; padding: 0;">
<span class="preheader" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;">All the camaraderie, without the awkward political discussions</span>
    <table
    class="body" style="border-collapse: collapse; border-spacing: 0; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; height: 100%; line-height: 1.75em; text-align: left; vertical-align: top; width: 100%; margin: 0; padding: 0;"
    bgcolor="#fff">
      <tr style="vertical-align: top; padding: 0;" align="left">
        <td class="center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;">
          <table align="center" class="container" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 710px; margin: 0 auto; padding: 0 0 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <center data-parsed="" style="min-width: 640px; width: 100%;">
                                  <img src="${vars.url_log}"
                                  alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 22%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                  />
                                  <!-- <img src="${vars.banner}"
                                  alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                  /> -->
                                </center>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="10px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 10px; font-weight: 400; hyphens: auto; line-height: 10px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-1 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-10 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 563.33px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                              <h1 class="text-center serif small-text-left" style="text-align: center;color: #25368c; -webkit-hyphens: none; font-family: rubik; font-size: 35px; font-weight: bold; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                              align="center">Hola!</h1>

                                <h5 class="text-center serif small-text-left" style="text-align: center;-webkit-hyphens: none; color: inherit; font-family: rubik;
                                font-size: 25px; font-weight: 400; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                                align="center">Clan te invita a seguir intentado ${vars.names} este es tu primer paso. <br> ya que has sido rechazado para esta oferta laboral.</h5>
                               
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-1 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-3 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-6 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="22px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 22px; font-weight: 400; hyphens: auto; line-height: 22px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p class="text-center small-text-left uppercase bold" style="-webkit-hyphens: none; color: #25368c; font-family: rubik;
                                font-size: 15px; font-weight: 700; hyphens: none; line-height: 1.75em; text-transform: uppercase; margin: 0; padding: 0;"
                                align="center">Sigue intentado".
                                 
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-12 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <center data-parsed="" style="min-width: 640px; width: 100%;">
                                  <table class="button float-center" style="border-collapse: collapse; border-spacing: 0; float: none; text-align: center; vertical-align: top; width: auto; margin: 0 0 10px; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <td style="background: #25368c;-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #fff; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0; "
                                            align="left"  valign="top">
                                              <a href="${vars.redirect_buttom}"
                                              style="border-radius: 0; color: #fff; display: inline-block; font-family: 'rubik'; font-size: 12px; font-weight: 600; letter-spacing: 1px; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 12px 36px; ">Iniciar Sesión</a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="border-top small-12 large-6 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; border-top-width: 1px; border-top-color: #c2c2c2; border-top-style: solid; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="40px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 40px; font-weight: 400; hyphens: auto; line-height: 40px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <table class="row navigation" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-6 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px 20px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <p style="-webkit-hyphens: none; color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; hyphens: none; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <img alt="Responsibly Built For The Long Haul" class="responsibly-built" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-responsibly-built-lockup.png?4921729998722299888"
                                  style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: 190px;"
                                  />
                                </p>
                                <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                  <tbody>
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-6 large-3 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/collections/all-mens?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Shop</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/workshop?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Workshop</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/collections/mens-last-call?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Last Call</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/blogs/dispatches?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">The Dispatch</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                        <th class="small-6 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/pages/about-us?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">About</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/account?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Account</a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/help?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                            style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Help</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                        align="left" valign="top"> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu social first" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                          align="left">
                                            <a href="https://www.instagram.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Instagram: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-instagram_13964307-5f03-4823-a56c-e3cf678e24c1.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.facebook.com/taylorstitchclothing" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Facebook: @taylorstitchclothing" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-facebook_8b79e338-a5d9-4c1e-a85f-8c006a3de733.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://twitter.com/taylorstitch" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Twitter: @TaylorStitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-twitter_004bd81c-a43e-4dff-8df4-eae827a2e956.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.pinterest.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="Pinterest: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-pinterest.png?10765265317295136418"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="/taylorstitch/images/1" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                              <img alt="VSCO: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-vsco.png?12714427464042413048"
                                              style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                              />
                                            </a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
          bgcolor="#fff">
            <tbody>
              <tr style="vertical-align: top; padding: 0;" align="left">
                <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                align="left" valign="top">
                  <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                    <tbody>
                      <tr style="vertical-align: top; padding: 0;" align="left">
                        <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                        align="left">
                          <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                            <tr style="vertical-align: top; padding: 0;" align="left">
                              <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                              align="left">
                                <table class="menu admin small-vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                  <tr style="vertical-align: top; padding: 0;" align="left">
                                    <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                    align="left" valign="top">
                                      <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                        <tr style="vertical-align: top; padding: 0;" align="left">
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                            style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">manage preferences <span class="show-for-large" style="padding-left: 20px;">|</span>
                                            </a>
                                          </th>
                                          <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                          align="left">
                                            <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                            style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">unsubscribe</a>
                                          </th>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                              align="left"></th>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table> -->
        </td>
      </tr>
      </table>
      <!-- prevent Gmail on iOS font size manipulation -->
      <div style="display: none; white-space: nowrap; font: 15px courier;">                                                           </div>
  </body>

</html>
    `
}
export const template_create_user = (vars: ITemplate) => {
  return `
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml"
  lang="en" xml:lang="en" style="min-height: 100%; background-color: #fff;" xml:lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="telephone=no" />
      <title>Welcome to Taylor Stitch Mens</title>
      <style>
        @media only screen and (max-width:720px) {
          .small-float-center {
            margin: 0 auto !important; float: none !important; text-align: center !important;
          }
          .small-text-center {
            text-align: center !important;
          }
          .small-text-left {
            text-align: left !important;
          }
          .small-text-right {
            text-align: right !important;
          }
          .hide-for-large {
            display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
          }
          table.body table.container .hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .row.hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .callout-inner.hide-for-large {
            display: table-cell !important; width: 100% !important;
          }
          table.body table.container .show-for-large {
            display: none !important; width: 0; mso-hide: all; overflow: hidden;
          }
          table.body img {
            width: auto; height: auto;
          }
          table.body center {
            min-width: 0 !important;
          }
          table.body .container {
            width: 100% !important;
          }
          table.body .column {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .columns {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .column .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .column .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          td.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          th.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          td.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          th.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          td.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          th.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          td.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          th.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          td.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          th.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          td.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          th.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          td.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          th.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          td.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          th.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          td.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          th.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          td.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          th.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          td.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          th.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          td.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          th.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          .column td.small-12 {
            display: block !important; width: 100% !important;
          }
          .column th.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns td.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns th.small-12 {
            display: block !important; width: 100% !important;
          }
          table.body td.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body th.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body td.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body th.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body td.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body th.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body td.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body th.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body td.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body th.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body td.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body th.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body td.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body th.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body td.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body th.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body td.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body th.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body td.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body th.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body td.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body th.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body table.columns td.expander {
            display: none !important;
          }
          table.body table.columns th.expander {
            display: none !important;
          }
          table.body .right-text-pad {
            padding-left: 10px !important;
          }
          table.body .text-pad-right {
            padding-left: 10px !important;
          }
          table.body .left-text-pad {
            padding-right: 10px !important;
          }
          table.body .text-pad-left {
            padding-right: 10px !important;
          }
          table.menu {
            width: 100% !important;
          }
          table.menu td {
            width: auto !important; display: inline-block !important;
          }
          table.menu th {
            width: auto !important; display: inline-block !important;
          }
          table.menu.small-vertical td {
            display: block !important;
          }
          table.menu.small-vertical th {
            display: block !important;
          }
          table.menu.vertical td {
            display: block !important;
          }
          table.menu.vertical th {
            display: block !important;
          }
          table.menu[align=center] {
            width: auto !important;
          }
          table.button.small-expand {
            width: 100% !important;
          }
          table.button.small-expanded {
            width: 100% !important;
          }
          table.button.small-expand table {
            width: 100%;
          }
          table.button.small-expanded table {
            width: 100%;
          }
          table.button.small-expand table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expanded table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expand center {
            min-width: 0;
          }
          table.button.small-expanded center {
            min-width: 0;
          }
          .letter-spaced-max {
            letter-spacing: .3em !important; text-indent: 0 !important;
          }
          .hero h3 {
            margin: 0 !important; max-width: none !important;
          }
          .ways-to-shop {
            padding: 0 25px;
          }
          .wordmark img {
            margin: 0 20px !important;
          }
          .wordmark-overlay img {
            margin: 0 20px !important;
          }
          .footer td.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer td.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer .navigation .last {
            width: auto !important;
          }
          .overlay.hero h1 {
            font-size: 26px !important;
          }
          .overlay.hero h3 {
            font-size: 12px !important;
          }
        }
        @media screen and (min-device-width:1px) {
          a[href^="x-apple-data-detectors:"] {
            color: inherit !important; text-decoration: none !important;
          }
          a[href^=tel] {
            color: inherit !important; text-decoration: none !important;
          }
        }
      </style>
    </head>
    
    <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; box-sizing: border-box; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; min-width: 100%; text-align: left; width: 100% !important; margin: 0; padding: 0;">
  <span class="preheader" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;">All the camaraderie, without the awkward political discussions</span>
      <table
      class="body" style="border-collapse: collapse; border-spacing: 0; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; height: 100%; line-height: 1.75em; text-align: left; vertical-align: top; width: 100%; margin: 0; padding: 0;"
      bgcolor="#fff">
        <tr style="vertical-align: top; padding: 0;" align="left">
          <td class="center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;">
            <table align="center" class="container" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 710px; margin: 0 auto; padding: 0 0 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <center data-parsed="" style="min-width: 640px; width: 100%;">
                                    <img src="${vars.url_log}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 22%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    />
                                    <!-- <img src="${vars.banner}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    /> -->
                                  </center>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="10px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 10px; font-weight: 400; hyphens: auto; line-height: 10px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-1 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-10 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 563.33px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="text-align: center;font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                <h1 class="text-center serif small-text-left" style="text-align: center;color: #25368c; -webkit-hyphens: none; font-family: rubik; font-size: 35px; font-weight: bold; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                                align="center">Hola! ${vars.names}</h1>
  
                                  <h5 class="text-center serif small-text-left" style="-webkit-hyphens: none; color: inherit; font-family: rubik;
                                  font-size: 15px; font-weight: 400; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; "
                                  align="center">Tu código de verificación es:</h5>
                                    <!-- AQUI ESTA EL CODIGO DE VERIFICACION -->
                                  <h1 class="text-center serif small-text-left" style="-webkit-hyphens: none; color: inherit; font-family: rubik;
                                  font-size: 45px; font-weight: 400; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; letter-spacing: 0.5em;"
                                  align="center">${vars.code}</h1>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-1 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-3 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                       
                          <th class="small-12 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="border-top small-12 large-6 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; border-top-width: 1px; border-top-color: #c2c2c2; border-top-style: solid; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="40px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 40px; font-weight: 400; hyphens: auto; line-height: 40px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <!-- <table class="row navigation" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-6 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <p style="-webkit-hyphens: none; color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; hyphens: none; line-height: 1.75em; margin: 0; padding: 0;"
                                  align="left">
                                    <img alt="Responsibly Built For The Long Haul" class="responsibly-built" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-responsibly-built-lockup.png?4921729998722299888"
                                    style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: 190px;"
                                    />
                                  </p>
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/all-mens?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Shop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/workshop?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Workshop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/mens-last-call?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Last Call</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/blogs/dispatches?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">The Dispatch</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/pages/about-us?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">About</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/account?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Account</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/help?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Help</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu social first" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.instagram.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Instagram: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-instagram_13964307-5f03-4823-a56c-e3cf678e24c1.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.facebook.com/taylorstitchclothing" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Facebook: @taylorstitchclothing" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-facebook_8b79e338-a5d9-4c1e-a85f-8c006a3de733.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://twitter.com/taylorstitch" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Twitter: @TaylorStitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-twitter_004bd81c-a43e-4dff-8df4-eae827a2e956.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.pinterest.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Pinterest: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-pinterest.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="/taylorstitch/images/1" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="VSCO: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-vsco.png?12714427464042413048"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu admin small-vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">manage preferences <span class="show-for-large" style="padding-left: 20px;">|</span>
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">unsubscribe</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </td>
        </tr>
        </table>
        <!-- prevent Gmail on iOS font size manipulation -->
        <div style="display: none; white-space: nowrap; font: 15px courier;">                                                           </div>
    </body>
  
  </html>
  `
}
export const template_rechazo_oferta = (vars: ITemplateOffer) => {
  return `
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml"
  lang="en" xml:lang="en" style="min-height: 100%; background-color: #fff;" xml:lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="telephone=no" />
      <title>Welcome to Taylor Stitch Mens</title>
      <style>
        @media only screen and (max-width:720px) {
          .small-float-center {
            margin: 0 auto !important; float: none !important; text-align: center !important;
          }
          .small-text-center {
            text-align: center !important;
          }
          .small-text-left {
            text-align: left !important;
          }
          .small-text-right {
            text-align: right !important;
          }
          .hide-for-large {
            display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
          }
          table.body table.container .hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .row.hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .callout-inner.hide-for-large {
            display: table-cell !important; width: 100% !important;
          }
          table.body table.container .show-for-large {
            display: none !important; width: 0; mso-hide: all; overflow: hidden;
          }
          table.body img {
            width: auto; height: auto;
          }
          table.body center {
            min-width: 0 !important;
          }
          table.body .container {
            width: 100% !important;
          }
          table.body .column {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .columns {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .column .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .column .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          td.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          th.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          td.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          th.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          td.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          th.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          td.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          th.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          td.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          th.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          td.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          th.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          td.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          th.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          td.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          th.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          td.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          th.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          td.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          th.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          td.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          th.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          td.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          th.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          .column td.small-12 {
            display: block !important; width: 100% !important;
          }
          .column th.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns td.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns th.small-12 {
            display: block !important; width: 100% !important;
          }
          table.body td.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body th.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body td.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body th.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body td.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body th.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body td.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body th.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body td.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body th.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body td.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body th.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body td.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body th.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body td.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body th.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body td.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body th.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body td.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body th.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body td.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body th.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body table.columns td.expander {
            display: none !important;
          }
          table.body table.columns th.expander {
            display: none !important;
          }
          table.body .right-text-pad {
            padding-left: 10px !important;
          }
          table.body .text-pad-right {
            padding-left: 10px !important;
          }
          table.body .left-text-pad {
            padding-right: 10px !important;
          }
          table.body .text-pad-left {
            padding-right: 10px !important;
          }
          table.menu {
            width: 100% !important;
          }
          table.menu td {
            width: auto !important; display: inline-block !important;
          }
          table.menu th {
            width: auto !important; display: inline-block !important;
          }
          table.menu.small-vertical td {
            display: block !important;
          }
          table.menu.small-vertical th {
            display: block !important;
          }
          table.menu.vertical td {
            display: block !important;
          }
          table.menu.vertical th {
            display: block !important;
          }
          table.menu[align=center] {
            width: auto !important;
          }
          table.button.small-expand {
            width: 100% !important;
          }
          table.button.small-expanded {
            width: 100% !important;
          }
          table.button.small-expand table {
            width: 100%;
          }
          table.button.small-expanded table {
            width: 100%;
          }
          table.button.small-expand table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expanded table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expand center {
            min-width: 0;
          }
          table.button.small-expanded center {
            min-width: 0;
          }
          .letter-spaced-max {
            letter-spacing: .3em !important; text-indent: 0 !important;
          }
          .hero h3 {
            margin: 0 !important; max-width: none !important;
          }
          .ways-to-shop {
            padding: 0 25px;
          }
          .wordmark img {
            margin: 0 20px !important;
          }
          .wordmark-overlay img {
            margin: 0 20px !important;
          }
          .footer td.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer td.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer .navigation .last {
            width: auto !important;
          }
          .overlay.hero h1 {
            font-size: 26px !important;
          }
          .overlay.hero h3 {
            font-size: 12px !important;
          }
        }
        @media screen and (min-device-width:1px) {
          a[href^="x-apple-data-detectors:"] {
            color: inherit !important; text-decoration: none !important;
          }
          a[href^=tel] {
            color: inherit !important; text-decoration: none !important;
          }
        }
      </style>
    </head>
    
    <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; box-sizing: border-box; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; min-width: 100%; text-align: left; width: 100% !important; margin: 0; padding: 0;">
  <span class="preheader" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;">All the camaraderie, without the awkward political discussions</span>
      <table
      class="body" style="border-collapse: collapse; border-spacing: 0; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; height: 100%; line-height: 1.75em; text-align: left; vertical-align: top; width: 100%; margin: 0; padding: 0;"
      bgcolor="#fff">
        <tr style="vertical-align: top; padding: 0;" align="left">
          <td class="center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;">
            <table align="center" class="container" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 710px; margin: 0 auto; padding: 0 0 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <center data-parsed="" style="min-width: 640px; width: 100%;">
                                    <img src="${vars.url_log}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 22%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    />
                                    <!-- <img src="${vars.banner}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    /> -->
                                  </center>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="10px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 10px; font-weight: 400; hyphens: auto; line-height: 10px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-1 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-10 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 563.33px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="text-align: center;font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                <h1 class="text-center serif small-text-left" style="text-align: center;color: #25368c; -webkit-hyphens: none; font-family:open sans ,sans-serif; font-size: 35px; font-weight: bold; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                                align="center"> ${vars.title}</h1>
  
                                  <h5 class="text-center serif small-text-left" style="-webkit-hyphens: none; color: #A91B0D; font-family:open sans ,sans-serif;
                                  font-size: 18px; font-weight: 400; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; "
                                  align="center">Hola lamentamos informarte que tu publicación infringe algunas normas de nuestra comunidad, a continuación detallamos el motivo de rechazo del aviso  ${vars.title}:</h5>
                                    <!-- AQUI ESTA EL CODIGO DE VERIFICACION -->
                                  <h1 class="text-left serif small-text-left" style="-webkit-hyphens: none; color: gray; font-family:open sans ,sans-serif;
                                  font-size: 17px; font-weight: 400; hyphens: none;   word-wrap: normal; "
                                  align="center">${vars.description}</h1>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-1 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-3 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                       
                          <th class="small-12 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="border-top small-12 large-6 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; border-top-width: 1px; border-top-color: #c2c2c2; border-top-style: solid; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="40px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 40px; font-weight: 400; hyphens: auto; line-height: 40px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <!-- <table class="row navigation" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-6 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <p style="-webkit-hyphens: none; color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; hyphens: none; line-height: 1.75em; margin: 0; padding: 0;"
                                  align="left">
                                    <img alt="Responsibly Built For The Long Haul" class="responsibly-built" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-responsibly-built-lockup.png?4921729998722299888"
                                    style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: 190px;"
                                    />
                                  </p>
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/all-mens?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Shop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/workshop?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Workshop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/mens-last-call?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Last Call</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/blogs/dispatches?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">The Dispatch</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/pages/about-us?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">About</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/account?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Account</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/help?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Help</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu social first" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.instagram.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Instagram: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-instagram_13964307-5f03-4823-a56c-e3cf678e24c1.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.facebook.com/taylorstitchclothing" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Facebook: @taylorstitchclothing" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-facebook_8b79e338-a5d9-4c1e-a85f-8c006a3de733.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://twitter.com/taylorstitch" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Twitter: @TaylorStitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-twitter_004bd81c-a43e-4dff-8df4-eae827a2e956.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.pinterest.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Pinterest: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-pinterest.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="/taylorstitch/images/1" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="VSCO: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-vsco.png?12714427464042413048"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu admin small-vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">manage preferences <span class="show-for-large" style="padding-left: 20px;">|</span>
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">unsubscribe</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </td>
        </tr>
        </table>
        <!-- prevent Gmail on iOS font size manipulation -->
        <div style="display: none; white-space: nowrap; font: 15px courier;">                                                           </div>
    </body>
  
  </html>
  `
}
export const template_email_wait = (vars: ITemplateEmailWait) => {
  return `
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/xhtml"
  lang="en" xml:lang="en" style="min-height: 100%; background-color: #fff;" xml:lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="telephone=no" />
      <title>Welcome to Taylor Stitch Mens</title>
      <style>
        @media only screen and (max-width:720px) {
          .small-float-center {
            margin: 0 auto !important; float: none !important; text-align: center !important;
          }
          .small-text-center {
            text-align: center !important;
          }
          .small-text-left {
            text-align: left !important;
          }
          .small-text-right {
            text-align: right !important;
          }
          .hide-for-large {
            display: block !important; width: auto !important; overflow: visible !important; max-height: none !important; font-size: inherit !important; line-height: inherit !important;
          }
          table.body table.container .hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .row.hide-for-large {
            display: table !important; width: 100% !important;
          }
          table.body table.container .callout-inner.hide-for-large {
            display: table-cell !important; width: 100% !important;
          }
          table.body table.container .show-for-large {
            display: none !important; width: 0; mso-hide: all; overflow: hidden;
          }
          table.body img {
            width: auto; height: auto;
          }
          table.body center {
            min-width: 0 !important;
          }
          table.body .container {
            width: 100% !important;
          }
          table.body .column {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .columns {
            height: auto !important; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: 20px !important; padding-right: 20px !important;
          }
          table.body .column .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .column .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .columns .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .column {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          table.body .collapse .columns {
            padding-left: 0 !important; padding-right: 0 !important;
          }
          td.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          th.small-1 {
            display: inline-block !important; width: 8.33333% !important;
          }
          td.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          th.small-2 {
            display: inline-block !important; width: 16.66667% !important;
          }
          td.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          th.small-3 {
            display: inline-block !important; width: 25% !important;
          }
          td.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          th.small-4 {
            display: inline-block !important; width: 33.33333% !important;
          }
          td.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          th.small-5 {
            display: inline-block !important; width: 41.66667% !important;
          }
          td.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          th.small-6 {
            display: inline-block !important; width: 50% !important;
          }
          td.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          th.small-7 {
            display: inline-block !important; width: 58.33333% !important;
          }
          td.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          th.small-8 {
            display: inline-block !important; width: 66.66667% !important;
          }
          td.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          th.small-9 {
            display: inline-block !important; width: 75% !important;
          }
          td.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          th.small-10 {
            display: inline-block !important; width: 83.33333% !important;
          }
          td.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          th.small-11 {
            display: inline-block !important; width: 91.66667% !important;
          }
          td.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          th.small-12 {
            display: inline-block !important; width: 100% !important;
          }
          .column td.small-12 {
            display: block !important; width: 100% !important;
          }
          .column th.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns td.small-12 {
            display: block !important; width: 100% !important;
          }
          .columns th.small-12 {
            display: block !important; width: 100% !important;
          }
          table.body td.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body th.small-offset-1 {
            margin-left: 8.33333% !important;
          }
          table.body td.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body th.small-offset-2 {
            margin-left: 16.66667% !important;
          }
          table.body td.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body th.small-offset-3 {
            margin-left: 25% !important;
          }
          table.body td.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body th.small-offset-4 {
            margin-left: 33.33333% !important;
          }
          table.body td.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body th.small-offset-5 {
            margin-left: 41.66667% !important;
          }
          table.body td.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body th.small-offset-6 {
            margin-left: 50% !important;
          }
          table.body td.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body th.small-offset-7 {
            margin-left: 58.33333% !important;
          }
          table.body td.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body th.small-offset-8 {
            margin-left: 66.66667% !important;
          }
          table.body td.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body th.small-offset-9 {
            margin-left: 75% !important;
          }
          table.body td.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body th.small-offset-10 {
            margin-left: 83.33333% !important;
          }
          table.body td.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body th.small-offset-11 {
            margin-left: 91.66667% !important;
          }
          table.body table.columns td.expander {
            display: none !important;
          }
          table.body table.columns th.expander {
            display: none !important;
          }
          table.body .right-text-pad {
            padding-left: 10px !important;
          }
          table.body .text-pad-right {
            padding-left: 10px !important;
          }
          table.body .left-text-pad {
            padding-right: 10px !important;
          }
          table.body .text-pad-left {
            padding-right: 10px !important;
          }
          table.menu {
            width: 100% !important;
          }
          table.menu td {
            width: auto !important; display: inline-block !important;
          }
          table.menu th {
            width: auto !important; display: inline-block !important;
          }
          table.menu.small-vertical td {
            display: block !important;
          }
          table.menu.small-vertical th {
            display: block !important;
          }
          table.menu.vertical td {
            display: block !important;
          }
          table.menu.vertical th {
            display: block !important;
          }
          table.menu[align=center] {
            width: auto !important;
          }
          table.button.small-expand {
            width: 100% !important;
          }
          table.button.small-expanded {
            width: 100% !important;
          }
          table.button.small-expand table {
            width: 100%;
          }
          table.button.small-expanded table {
            width: 100%;
          }
          table.button.small-expand table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expanded table a {
            text-align: center !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
          }
          table.button.small-expand center {
            min-width: 0;
          }
          table.button.small-expanded center {
            min-width: 0;
          }
          .letter-spaced-max {
            letter-spacing: .3em !important; text-indent: 0 !important;
          }
          .hero h3 {
            margin: 0 !important; max-width: none !important;
          }
          .ways-to-shop {
            padding: 0 25px;
          }
          .wordmark img {
            margin: 0 20px !important;
          }
          .wordmark-overlay img {
            margin: 0 20px !important;
          }
          .footer td.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.column table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer th.columns table.menu.vertical .menu-item {
            padding-left: 0 !important;
          }
          .footer td.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer td.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.column table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer th.columns table.menu.admin .menu-item {
            padding: 0 !important;
          }
          .footer .navigation .last {
            width: auto !important;
          }
          .overlay.hero h1 {
            font-size: 26px !important;
          }
          .overlay.hero h3 {
            font-size: 12px !important;
          }
        }
        @media screen and (min-device-width:1px) {
          a[href^="x-apple-data-detectors:"] {
            color: inherit !important; text-decoration: none !important;
          }
          a[href^=tel] {
            color: inherit !important; text-decoration: none !important;
          }
        }
      </style>
    </head>
    
    <body style="-moz-box-sizing: border-box; -ms-text-size-adjust: 100%; -webkit-box-sizing: border-box; -webkit-text-size-adjust: 100%; box-sizing: border-box; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; min-width: 100%; text-align: left; width: 100% !important; margin: 0; padding: 0;">
  <span class="preheader" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; mso-hide: all !important; opacity: 0; overflow: hidden; visibility: hidden;">All the camaraderie, without the awkward political discussions</span>
      <table
      class="body" style="border-collapse: collapse; border-spacing: 0; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; height: 100%; line-height: 1.75em; text-align: left; vertical-align: top; width: 100%; margin: 0; padding: 0;"
      bgcolor="#fff">
        <tr style="vertical-align: top; padding: 0;" align="left">
          <td class="center" align="center" valign="top" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;">
            <table align="center" class="container" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row collapse" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 710px; margin: 0 auto; padding: 0 0 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <center data-parsed="" style="min-width: 640px; width: 100%;">
                                    <img src="${vars.url_log}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 22%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    />
                                    <!-- <img src="${vars.banner}"
                                    alt="Bienvenido a Clan" align="center" class="float-center" style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-align: center; text-decoration: none; width: auto; margin: 0 auto;"
                                    /> -->
                                  </center>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="10px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 10px; font-weight: 400; hyphens: auto; line-height: 10px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer show-for-large" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-1 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-10 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 563.33px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="text-align: center;font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                <h1 class="text-center serif small-text-left" style="text-align: center;color: #25368c; -webkit-hyphens: none; font-family:open sans ,sans-serif; font-size: 35px; font-weight: bold; hyphens: none; letter-spacing: .02em; line-height: 1.1em; word-wrap: normal; margin: 0; padding: 0;"
                                align="center">¡Hola ${vars.name}!</h1>
  
                                 
                                    <!-- AQUI ESTA EL CODIGO DE VERIFICACION -->
                                  <h1 class="text-left serif small-text-left" style="-webkit-hyphens: none; color: gray; font-family:open sans ,sans-serif;
                                  font-size: 20px; font-weight: 400; hyphens: none;   word-wrap: normal; "
                                  align="center">${vars.count} ${vars.count == 1 ? 'oferta en espera actualmente':'ofertas en espera actualmente'} </h1>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-12 large-1 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 38.33px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-3 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                       
                          <th class="small-12 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="60px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 60px; font-weight: 400; hyphens: auto; line-height: 60px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="border-top small-12 large-6 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; border-top-width: 1px; border-top-color: #c2c2c2; border-top-style: solid; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="40px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 40px; font-weight: 400; hyphens: auto; line-height: 40px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <!-- <table class="row navigation" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-6 columns first" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 330px; margin: 0 auto; padding: 0 10px 10px 20px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <p style="-webkit-hyphens: none; color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; hyphens: none; line-height: 1.75em; margin: 0; padding: 0;"
                                  align="left">
                                    <img alt="Responsibly Built For The Long Haul" class="responsibly-built" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-responsibly-built-lockup.png?4921729998722299888"
                                    style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: 190px;"
                                    />
                                  </p>
                                  <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                    <tbody>
                                      <tr style="vertical-align: top; padding: 0;" align="left">
                                        <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                                        align="left" valign="top"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/all-mens?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Shop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/workshop?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Workshop</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/collections/mens-last-call?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Last Call</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/blogs/dispatches?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">The Dispatch</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th class="small-6 large-3 columns last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 155px; margin: 0 auto; padding: 0 20px 10px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/pages/about-us?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">About</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/account?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Account</a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; display: block; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0 0 0 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/help?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite"
                                              style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; width: 100%; margin: 0; padding: 0;">Help</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <table class="spacer" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <td height="30px" style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 30px; font-weight: 400; hyphens: auto; line-height: 30px; mso-line-height-rule: exactly; word-wrap: break-word; margin: 0; padding: 0;"
                          align="left" valign="top"> </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu social first" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.instagram.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Instagram: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-instagram_13964307-5f03-4823-a56c-e3cf678e24c1.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.facebook.com/taylorstitchclothing" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Facebook: @taylorstitchclothing" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-facebook_8b79e338-a5d9-4c1e-a85f-8c006a3de733.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://twitter.com/taylorstitch" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Twitter: @TaylorStitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-twitter_004bd81c-a43e-4dff-8df4-eae827a2e956.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.pinterest.com/taylorstitch/" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="Pinterest: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-pinterest.png?10765265317295136418"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="/taylorstitch/images/1" style="color: #363636; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">
                                                <img alt="VSCO: @taylorstitch" src="https://cdn.shopify.com/s/files/1/0070/1922/files/emails-icon-vsco.png?12714427464042413048"
                                                style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 22px; max-width: 100%; outline: 0; text-decoration: none; width: 22px; border: none;"
                                                />
                                              </a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" class="container footer" style="border-collapse: collapse; border-spacing: 0; text-align: inherit; vertical-align: top; width: 700px; margin: 0 auto; padding: 0;"
            bgcolor="#fff">
              <tbody>
                <tr style="vertical-align: top; padding: 0;" align="left">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                  align="left" valign="top">
                    <table class="row" style="border-collapse: collapse; border-spacing: 0; display: table; position: relative; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                      <tbody>
                        <tr style="vertical-align: top; padding: 0;" align="left">
                          <th class="small-12 large-12 columns first last" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; width: 680px; margin: 0 auto; padding: 0 20px 10px;"
                          align="left">
                            <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                              <tr style="vertical-align: top; padding: 0;" align="left">
                                <th style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 0;"
                                align="left">
                                  <table class="menu admin small-vertical" style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: auto; padding: 0;">
                                    <tr style="vertical-align: top; padding: 0;" align="left">
                                      <td style="-moz-hyphens: auto; -webkit-hyphens: auto; border-collapse: collapse !important; color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; hyphens: auto; line-height: 1.75em; word-wrap: break-word; margin: 0; padding: 0;"
                                      align="left" valign="top">
                                        <table style="border-collapse: collapse; border-spacing: 0; text-align: left; vertical-align: top; width: 100%; padding: 0;">
                                          <tr style="vertical-align: top; padding: 0;" align="left">
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px 10px 10px 0;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">manage preferences <span class="show-for-large" style="padding-left: 20px;">|</span>
                                              </a>
                                            </th>
                                            <th class="menu-item" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; margin: 0; padding: 10px;"
                                            align="left">
                                              <a href="https://www.taylorstitch.com/tools/communication-preferences?utm_source=shopify&amp;utm_medium=email&amp;utm_campaign=account_invite&amp;tsio_uid=2398595743901"
                                              style="color: #c2c2c2; font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif; font-size: 12px; font-weight: 400; line-height: 1.75em; text-align: left; text-decoration: none; margin: 0; padding: 0;">unsubscribe</a>
                                            </th>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </th>
                                <th class="expander" style="color: #363636; font-family: Chronicle,Georgia,Times,Times New Roman,serif; font-size: 15px; font-weight: 400; line-height: 1.75em; visibility: hidden; width: 0; margin: 0; padding: 0;"
                                align="left"></th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </td>
        </tr>
        </table>
        <!-- prevent Gmail on iOS font size manipulation -->
        <div style="display: none; white-space: nowrap; font: 15px courier;">                                                           </div>
    </body>
  
  </html>
  `
}