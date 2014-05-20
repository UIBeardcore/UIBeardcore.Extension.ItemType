Type.registerNamespace("UIBeardcore.ItemType.ContentManagerExtensions");

UIBeardcore.ItemType.ContentManagerExtensions.Folder = function UIBeardcore$ContentManagerExtensions$Folder()
{
	Tridion.OO.enableInterface(this, "UIBeardcore.ItemType.ContentManagerExtensions.Folder");
	this.addInterface("Tridion.ContentManager.Folder", arguments);

	var p = this.properties;

	p.containedItemsCount$Beardcore = undefined;
};

UIBeardcore.ItemType.ContentManagerExtensions.Folder.prototype.geContainedItemsCount$Beardcore = function UIBeardcore$ContentManagerExtensions$Folder$getAssociatedTmItemType()
{
	var p = this.properties;
	if (p.containedItemsCount$Beardcore === undefined && (xmlDoc = this.getStateXmlDocument()))
	{
		var tmp = $xml.getInnerText(xmlDoc, "/tcm:*/tcm:Data/bc:ContainedItemsCount", "", { "bc": $const.Namespaces["bc"] });
		p.containedItemsCount$Beardcore = Type.isNumeric(tmp) && Number(tmp) || null;
	}
	return p.containedItemsCount$Beardcore;
};

/**
 * Invalidates the cached properties that are persistent during the editing session before save.
 */
UIBeardcore.ItemType.ContentManagerExtensions.Folder.prototype.invalidateReadOnlyProperties = function UIBeardcore$ContentManagerExtensions$Folder$invalidateReadOnlyProperties()
{
	var p = this.properties;
	p.containedItemsCount$Beardcore = undefined;

	this.callBase("Tridion.ContentManager.Folder", "invalidateReadOnlyProperties", arguments);
};

/**
 * Invalidates the cached properties that can be changed during editing session.
 */
//UIBeardcore.ItemType.ContentManagerExtensions.Folder.prototype.invalidateEditableProperties = function UIBeardcore$ContentManagerExtensions$Folder$invalidateEditableProperties()
//{
//	this.callBase("Tridion.ContentManager.Folder", "invalidateEditableProperties", arguments);
//};