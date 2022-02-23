---
layout: post
title: "Jenkins rbac"
---

* Plugin: Role based authentication
* Can restrict what jobs users can see by folder
* Can restrict what users can do by folder too
* Our folder hierarchy currently looks like this
  * Develop
    * Build apps
    * Run end to end tests
  * Operations
    * Non-prod
      * Various other small tasks
    * Prod
      * Run terraform, ansible
  * Release Management
    * Deploy apps
    * Create release branches
* We can add jobs at the non-prod level for operators who are just starting with the team and don't have full system access yet
* Secrets vault can be pinned to folders. eg develop secrets can be kept separate from operations (prod) by adding them to the respective vault. Vaults are created at the level of folders and there's the global one