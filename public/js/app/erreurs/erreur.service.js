"use strict";
var core_1 = require('@angular/core');
var erreur_1 = require('./erreur');
var ErreurService = (function () {
    function ErreurService() {
        this.erreurArrivee = new core_1.EventEmitter();
    }
    ErreurService.prototype.handleErreur = function (erreur) {
        var erreurData = new erreur_1.Erreur(erreur.title, erreur.error.message);
        this.erreurArrivee.emit(erreurData);
    };
    return ErreurService;
}());
exports.ErreurService = ErreurService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycmV1cnMvZXJyZXVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBdUIsVUFBVSxDQUFDLENBQUE7QUFFbEM7SUFBQTtRQUNJLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFNL0MsQ0FBQztJQUpHLG9DQUFZLEdBQVosVUFBYSxNQUFXO1FBQ3BCLElBQU0sVUFBVSxHQUFHLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHFCQUFhLGdCQU96QixDQUFBIiwiZmlsZSI6ImVycmV1cnMvZXJyZXVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXJyZXVyIH0gZnJvbSAnLi9lcnJldXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycmV1clNlcnZpY2V7XHJcbiAgICBlcnJldXJBcnJpdmVlID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJldXI+KCk7XHJcblxyXG4gICAgaGFuZGxlRXJyZXVyKGVycmV1cjogYW55KXtcclxuICAgICAgICBjb25zdCBlcnJldXJEYXRhID0gbmV3IEVycmV1cihlcnJldXIudGl0bGUsIGVycmV1ci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmVycmV1ckFycml2ZWUuZW1pdChlcnJldXJEYXRhKTtcclxuICAgIH1cclxufSJdfQ==
