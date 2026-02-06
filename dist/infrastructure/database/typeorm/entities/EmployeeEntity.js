var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
import { Entity, Column, PrimaryColumn } from 'typeorm';
export let EmployeeEntity = (_dec = Entity({
  name: 'Employees',
  schema: 'dbo'
}), _dec2 = PrimaryColumn({
  type: 'int'
}), _dec3 = Column({
  type: 'nvarchar',
  length: 50
}), _dec4 = Column({
  type: 'int'
}), _dec5 = Column({
  type: 'nvarchar',
  length: 255
}), _dec6 = Column({
  type: 'nvarchar',
  length: 10,
  nullable: true
}), _dec7 = Column({
  type: 'nvarchar',
  length: 50,
  nullable: true
}), _dec8 = Column({
  type: 'date',
  nullable: true
}), _dec9 = Column({
  type: 'nvarchar',
  length: 100,
  nullable: true
}), _dec0 = Column({
  type: 'nvarchar',
  length: 20,
  nullable: true
}), _dec1 = Column({
  type: 'nvarchar',
  length: 20,
  nullable: true
}), _dec10 = Column({
  type: 'nvarchar',
  length: 255,
  nullable: true
}), _dec11 = Column({
  type: 'nvarchar',
  length: 255,
  nullable: true
}), _dec12 = Column({
  type: 'int',
  nullable: true
}), _dec13 = Column({
  type: 'int'
}), _dec14 = Column({
  type: 'int',
  nullable: true
}), _dec15 = Column({
  type: 'int',
  nullable: true
}), _dec16 = Column({
  type: 'bit',
  nullable: true
}), _dec17 = Column({
  type: 'date',
  nullable: true
}), _dec18 = Column({
  type: 'date',
  nullable: true
}), _dec19 = Column({
  type: 'nvarchar',
  length: 100,
  nullable: true
}), _dec20 = Column({
  type: 'nvarchar',
  length: 100,
  nullable: true
}), _dec21 = Column({
  type: 'nvarchar',
  length: 255,
  nullable: true
}), _dec22 = Column({
  type: 'int',
  nullable: true
}), _dec23 = Column({
  type: 'int',
  nullable: true
}), _dec(_class = (_class2 = class EmployeeEntity {
  constructor() {
    _initializerDefineProperty(this, "Id", _descriptor, this);
    _initializerDefineProperty(this, "DocumentNumber", _descriptor2, this);
    _initializerDefineProperty(this, "DocumentType", _descriptor3, this);
    _initializerDefineProperty(this, "FullName", _descriptor4, this);
    _initializerDefineProperty(this, "Gender", _descriptor5, this);
    _initializerDefineProperty(this, "MaritalStatus", _descriptor6, this);
    _initializerDefineProperty(this, "DateOfBirth", _descriptor7, this);
    _initializerDefineProperty(this, "PlaceOfBirth", _descriptor8, this);
    _initializerDefineProperty(this, "Phone1", _descriptor9, this);
    _initializerDefineProperty(this, "Phone2", _descriptor0, this);
    _initializerDefineProperty(this, "Address", _descriptor1, this);
    _initializerDefineProperty(this, "Email", _descriptor10, this);
    _initializerDefineProperty(this, "Post", _descriptor11, this);
    _initializerDefineProperty(this, "CompanyId", _descriptor12, this);
    _initializerDefineProperty(this, "EmployeeType", _descriptor13, this);
    _initializerDefineProperty(this, "OfficeId", _descriptor14, this);
    _initializerDefineProperty(this, "Asset", _descriptor15, this);
    _initializerDefineProperty(this, "DateOfEntry", _descriptor16, this);
    _initializerDefineProperty(this, "CompletionDate", _descriptor17, this);
    _initializerDefineProperty(this, "FirsName", _descriptor18, this);
    _initializerDefineProperty(this, "LastName", _descriptor19, this);
    _initializerDefineProperty(this, "CauseWithdrawal", _descriptor20, this);
    _initializerDefineProperty(this, "TypeOfContract", _descriptor21, this);
    _initializerDefineProperty(this, "IdCecoName", _descriptor22, this);
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DocumentNumber", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DocumentType", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "FullName", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Gender", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "MaritalStatus", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "DateOfBirth", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PlaceOfBirth", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Phone1", [_dec0], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor0 = _applyDecoratedDescriptor(_class2.prototype, "Phone2", [_dec1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor1 = _applyDecoratedDescriptor(_class2.prototype, "Address", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Email", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Post", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "CompanyId", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "EmployeeType", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "OfficeId", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Asset", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "DateOfEntry", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "CompletionDate", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "FirsName", [_dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "LastName", [_dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "CauseWithdrawal", [_dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "TypeOfContract", [_dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "IdCecoName", [_dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);